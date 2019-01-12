const proxy = require("http-proxy-middleware");

// Magical file included by create-react-app to set up our proxies.

module.exports = function(app) {
  app.use(proxy("/graphql", { target: "http://localhost:4000/graphql" }))
};
