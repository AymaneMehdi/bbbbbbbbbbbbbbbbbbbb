const express = require('express');
const app = express();
app.use(express.json());

const errorHandler = require('./middleware/errorHandler');

require("dotenv").config();

const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const OrderRouter = require('./routes/orderRouter');
const authRoutes = require("./routes/authRouter");

require("./Config/db");

const cors = require("cors");
app.use(cors());

// Routers


app.use("/api/auth", authRoutes);

app.use('/categories', categoryRouter)

app.use("/orders", OrderRouter);

app.use('/products', productRouter);

app.all("*", (req, res) => {
  res.send("Page not found");
});

// Error handler middleware
app.use(errorHandler);

app.listen(process.env.PORT , () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`))

module.exports = app;

