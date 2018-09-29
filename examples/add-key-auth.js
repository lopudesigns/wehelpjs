const wehelpjs = require('../lib');

/* Generate private active WIF */
const username = process.env.NODE_USERNAME;
const password = process.env.NODE_PASSWORD;
const privActiveWif = wehelpjs.auth.toWif(username, password, 'active');

/** Add posting key auth */
wehelpjs.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'TWYM68K7veT6Wz9tp9vXoAwgSH5D5nFqfKqs7j8KXugwBWoyPykoPj',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
