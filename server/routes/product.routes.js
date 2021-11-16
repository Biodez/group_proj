const productRoutes = require("../controllers/product.controller");
const jwtMiddleware = require("../middleware/jwt.middleware");
module.exports = (app) => {
  app.get("api/healthcheck", productRoutes.healthCheck);
  app.get("/api/products", productRoutes.getProducts);
  app.get(
    "/api/product/:_id",
    jwtMiddleware.authenticate,
    productRoutes.getProduct
  );
  app.post(
    "/api/product",
    jwtMiddleware.authenticate,
    productRoutes.addProduct
  );
  app.put(
    "/api/product/:_id",
    jwtMiddleware.authenticate,
    productRoutes.updateProduct
  );
  app.delete(
    "/api/product/:_id",
    jwtMiddleware.authenticate,
    productRoutes.deleteProduct
  );
};
