const wehelpjs = require('../lib');

/* Generate private active WIF */
const username = process.env.NODE_USERNAME;
const password = process.env.NODE_PASSWORD;
const privActiveWif = wehelpjs.auth.toWif(username, password, 'active');

/** Add posting key auth */
wehelpjs.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'TWYM7GXFkFDNkweQJHhegS1iX5vg1oEouAhZ5EZZR34cYUxQvHFii5',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
