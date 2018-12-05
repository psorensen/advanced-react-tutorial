const { forwardTo } = require("prisma-binding");
const Query = {
  items: forwardTo("db"),
  users: forwardTo("db")
};

module.exports = Query;
