const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = 4000;
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/AuthRoute');
const User = require('./Models/UserModel');
const data = require('./data');
mongoose
  .connect(
    'mongodb+srv://napraveen:praveen@praveencluster.ihcxeia.mongodb.net/ecommerce'
  )
  .then(() => console.log('MongoDB is  connected successfully'))
  .catch((err) => console.error(err));

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use('/', authRoute);
app.get('/api/user/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.json(user);
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.get('/api/products/product/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
