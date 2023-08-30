const mongoose = require('mongoose');


// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});


// Create and export the Product model using the defined schema
module.exports = mongoose.model('Product', productSchema);
