const express = require('express');
const app = express();
const port = 7865;

// Middleware to parse JSON requests
app.use(express.json());

// GET / endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// GET /cart/:id endpoint
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(404).send('Not Found');
  } else {
    res.status(200).send(`Payment methods for cart ${id}`);
  }
});

// GET /available_payments endpoint
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// POST /login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

if (require.main === module) {
  // Only start the server if this module is the main module
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

module.exports = app;

