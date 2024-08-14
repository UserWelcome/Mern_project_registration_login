const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true }, 
  amount: { type: Number, required: true },

},{timestamps:true});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;