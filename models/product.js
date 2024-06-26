const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: [String],
    required: true
  },
  color: {
    type: [String],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  media: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
