const asyncHandler = require("express-async-handler");
const Stripe = require("stripe");
const stripe = Stripe(
  process.env.JWT_SECRET
    ? process.env.JWT_SECRET
    : "sk_test_51JMOG7BXAvS9ZeAiadoruClqy2AN1j8GyIPyRimApxkirMSwazfsxQpqVsezUSMG51aw7eSqsDP4ctvfkYvKU2kO00BR9KaUHG"
);

const YOUR_DOMAIN = "http://localhost:3000";
const createCheckoutSession = asyncHandler(async (req, res) => {
  const { body: product } = req;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100,
          },
          quantity: product.quantity,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });
    res.json({ id: session.id });
  } catch (error) {
    throw new Error(error);
  }
});

const createCustomer = asyncHandler(async (req, res) => {
  const { email, name } = req.body;
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    });
    res.json(customer);
  } catch (error) {
    throw new Error(error);
  }
});
const getCustomer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await stripe.customers.retrieve(id);
    res.json(customer);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createCheckoutSession,
  createCustomer,
  getCustomer,
};
