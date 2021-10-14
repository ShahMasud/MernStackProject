const mongoose =require("mongoose");
const bcrypt =require("bcryptjs");

const pricingSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
  },
    
  },
  {
    timestamps: true,
  }
);
const Pricing = mongoose.model("Pricing", pricingSchema);

module.exports = Pricing;
