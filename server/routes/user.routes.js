const userController = require("../controllers/user.controller");
const jwtMiddleware = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/client/signup", userController.signUp);
  app.post("/api/client/signin", userController.signIn);
  app.get(
    "/api/protected",
    jwtMiddleware.authenticate,
    userController.protected
  );
  app.post("/api/client/logout", userController.logout);
};
