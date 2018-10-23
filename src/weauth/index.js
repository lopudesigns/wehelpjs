import fetch from 'isomorphic-fetch';
import { api } from '../api';
import { broadcast } from '../broadcast';
import { decode } from '../auth/memo';
import { key_utils } from '../auth/ecc'; // eslint-disable-line camelcase

export const login = ({ username, wif, role = 'posting' }, cb) => {
  fetch(`/api/login/challenge?username=${username}&role=${role}`)
    .then(res => res.json())
    .then((data) => {
      const token = decode(wif, data.code).substring(1);
      localStorage.setItem('token', token);
      cb(null, data);
    })
    .catch(err => cb(err, null));
};

export const hasAuthority = (user, clientId, role = 'posting') => {
  const auths = user[role].account_auths.map(auth => auth[0]);
  return auths.indexOf(clientId) !== -1;
};

export const addPostingAuthority = ({ username, wif, clientId }, cb) => {
  api.getAccounts([username], (err, result) => {
    const { posting, memoKey, json } = result[0];
    const postingNew = posting;
    if (!hasAuthority(result[0], clientId)) {
      postingNew.account_auths.push([clientId, parseInt(posting.weight_threshold, 10)]);
      broadcast.accountUpdate(
        wif,
        username,
        undefined,
        undefined,
        postingNew,
        memoKey,
        json,
        (errA, resultA) => cb(errA, resultA));
    } else {
      cb(null, {});
    }
  });
};

export const authorize = ({ clientId, scope, responseType = 'token' }, cb) => {
  const token = localStorage.getItem('token');
  fetch(`/api/oauth2/authorize?client_id=${clientId}&scope=${scope}&response_type=${responseType}`, {
    headers: new Headers({ Authorization: token }),
  })
    .then(res => res.json())
    .then(data => cb(null, data))
    .catch(err => cb(err, null));
};

// https://github.com/WeYouMe/weauth/blob/634c13cd0d2fafa28592e9d5f43589e201198248/app/components/elements/SuggestPassword.jsx#L97
export const createSuggestedPassword = () => {
  const PASSWORD_LENGTH = 32;
  const privateKey = key_utils.get_random_key();
  return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
};

export const getAccountCreationFee = async () => {
  const chainConfig = await api.getConfigAsync();
  const chainProps = await api.getChainPropertiesAsync();
  const accountCreationFee = chainProps.account_creation_fee;
  const priceModifier = chainConfig.CREATE_ACCOUNT_WITH_TME_MODIFIER;
  const accountCreationFeeInTME = parseFloat(accountCreationFee.split(' ')[0]) * priceModifier;
  return `${accountCreationFeeInTME.toFixed(3)} TME`;
};
