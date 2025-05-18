const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);
const cors = require("cors");
// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // frontend's URL
  })
);
app.use(express.json());

const calculateAmount = (items) => {
  //calculate amount on the server
  let total = 0;

  items.forEach((item) => {
    total = total + item.price;
  });
  return total;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  console.log("Received items:", items);

  //create a payment intent with ordered amount and currency
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateAmount(items),
      currency: "usd",
    });
    console.log("PaymentIntent created:", paymentIntent);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(4242, () => console.log("Node server listening on port 4242"));
