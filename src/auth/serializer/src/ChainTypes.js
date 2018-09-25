var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations= {
    vote: 0,
    comment: 1,
    transfer: 2,
    transferTMEtoSCOREfund: 3,
    withdrawSCORE: 4,
    limit_order_create: 5,
    limit_order_cancel: 6,
    feed_publish: 7,
    convert: 8,
    accountCreate: 9,
    accountUpdate: 10,
    witness_update: 11,
    accountWitnessVote: 12,
    account_witness_proxy: 13,
    pow: 14,
    custom: 15,
    report_over_production: 16,
    deleteComment: 17,
    customJson: 18,
    comment_options: 19,
    setWithdrawSCOREasTMEroute: 20,
    limit_order_create2: 21,
    challenge_authority: 22,
    prove_authority: 23,
    request_account_recovery: 24,
    recover_account: 25,
    change_recoveryAccount: 26,
    escrow_transfer: 27,
    escrow_dispute: 28,
    escrow_release: 29,
    pow2: 30,
    escrow_approve: 31,
    transferToSavings: 32,
    transferFromSavings: 33,
    cancelTransferFromSavings: 34,
    custom_binary: 35,
    decline_voting_rights: 36,
    reset_account: 37,
    set_reset_account: 38,
    claimRewardBalance: 39,
    delegateSCORE: 40,
    accountCreateWithDelegation: 41,
    fill_convert_request: 42,
    authorReward: 43,
    curationReward: 44,
    comment_reward: 45,
    liquidity_reward: 46,
    interest: 47,
    fillSCOREWithdraw: 48,
    fill_order: 49,
    shutdown_witness: 50,
    fill_transferFromSavings: 51,
    hardfork: 52,
    comment_payout_update: 53,
    return_SCORE_delegation: 54,
    comment_benefactor_reward: 55
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1,
};
