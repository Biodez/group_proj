const adminController = require("../controllers/admin.controller");
const jwtMiddleware = require("../middleware/jwt.middleware");

module.exports = (app) => {
  app.post("/api/signup", adminController.signUp);
  app.post("/api/signin", adminController.signIn);
  app.get(
    "/api/protected",
    jwtMiddleware.authenticate,
    adminController.protected
  );
  app.post("/api/logout", adminController.logout);
  app.post(
    "/api/profile",
    jwtMiddleware.authenticate,
    adminController.updateUserProfile
  );
};
