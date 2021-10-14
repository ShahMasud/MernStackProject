const mongoose =require("mongoose");
const bcrypt =require("bcryptjs");

const contactSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
  },
  message: {
    type: String,
    required: true,
},
    
  },
  {
    timestamps: true,
  }
);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
