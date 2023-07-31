var mongoose = require('mongoose');

var schemaDelivery = new mongoose.Schema(
  {
    Account:String,
    Name: String,
    Number: { type: String },
    Nation: { type: String },
    City: { type: String },
    District: { type: String },
    Wards: { type: String },
    Location: { type: String },
    Status:String,
    cart: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
          quantity: { type: Number, default: 1 },
          image: { type: String},
          name: { type: String },
          price: { type: String}
        }
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Delivery', schemaDelivery);
