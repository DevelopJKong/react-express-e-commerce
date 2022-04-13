const { payment } = require("../controllers/stripeController");

const stripeRouter = require("express").Router();

stripeRouter.post("/payment", payment);

module.exports = stripeRouter;
