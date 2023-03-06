const express = require("express");

const {
  createCheckoutSession,
  createCustomer,
  getCustomer,
} = require("../controller/paymentCtrl");

const router = express.Router();
router.post("/", createCheckoutSession);
router.post("/create-customer", createCustomer);
router.get("/get-customer/:id", getCustomer);

module.exports = router;
