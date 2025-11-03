import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import CORS middleware
import ProductRoute from './Routers/product.route.js';
import userRoute from './Routers/user.route.js'
import registerUserRoute from './Routers/register.user.route.js'
import sellerRoute from './Routers/seller.route.js';



const app = express();
const PORT = 8002;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware - place it here before defining routes
app.use(cors());

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});


mongoose.connect(db_link)
    .then(function (db) 
    {
        console.log("db connected");
    })
    .catch(function (error) {
        console.log(error);
    });

// Mount the product route
app.use('/products', ProductRoute);
app.use("/user",userRoute);
app.use("/resi", registerUserRoute)
app.use("/seller", sellerRoute)


app.use("/PaymentSuccess", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "paymentSuccess.html"));
});

//stripe
import stripe from 'stripe';


app.post('/checkout', async (req, res) => {
  try {
      // Extract necessary data from the request body
      const { items, email, name, address } = req.body; // Extract name and address from request body

      // Create a Stripe checkout session
      const session = await striped.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: items.map(item => ({
              price_data: {
                  currency: 'INR', // Set the currency to Indian Rupees (INR)
                  product_data: {
                      name: item.name,
                  },
                  unit_amount: item.price * 100, // Stripe uses smallest currency unit, so multiply by 100
              },
              quantity: item.quantity,
          })),
          mode: 'payment',
          success_url: 'http://localhost:5173/payment',
          cancel_url: 'http://localhost:5173/PaymentFailed',
          customer_email: email,
          billing_address_collection: 'required', // Require billing address
      });

      // Send the session ID back to the client
      res.json({ sessionId: session.id });
  } catch (error) {
      console.error("Error during checkout:", error.message);
      res.status(500).json({ error: error.message });
  }
});

