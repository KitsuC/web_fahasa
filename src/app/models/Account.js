var mongoose = require('mongoose');
var schemaAccount = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      minlength: 4,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      minlength: 6,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 10,
    },
    admin: {
      type: Boolean,
      default: false,
    },
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

module.exports = mongoose.model('Account', schemaAccount);
