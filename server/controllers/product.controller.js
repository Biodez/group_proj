const { request, response } = require("express");
const Product = require("../models/product.model");

const healthCheck = (request, response) => {
  response.json({ message: "backend healthy" });
};

const addProduct = (request, response) => {
  const { body } = request;
  Product.create(body)
    .then((productCreated) => response.json(productCreated))
    .catch((err) => {
      response.status(401).json(err);
    });
};

const getProducts = (request, response) => {
  Product.find()
    .then((products) => response.json(products))
    .catch((err) => {
      response.status(400).json(err);
    });
};

const getProduct = (request, response) => {
  const { params } = request;
  Product.findOne({ _id: params._id })
    .then((product) => response.json(product))
    .catch((err) => {
      response.status(400).json(err);
    });
};

const updateProduct = (request, response) => {
  const { params } = request;
  Product.findOneAndUpdate({ _id: params._id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((productUpdated) => response.json(productUpdated))
    .catch((err) => {
      response.status(404).json(err);
    });
};

const deleteProduct = (request, response) => {
  const { params } = request;
  Product.deleteOne({ _id: params._id })
    .then((deletedProduct) => response.json(deletedProduct))
    .catch((err) => {
      response.status(400).json(err);
    });
};

module.exports = {
  healthCheck,
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
