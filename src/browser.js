const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const wehelpjs = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.wehelpjs = wehelpjs;
}

if (typeof global !== "undefined") {
  global.wehelpjs = wehelpjs;
}

exports = module.exports = wehelpjs;
