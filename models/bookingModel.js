const mongoose =require("mongoose");
const bcrypt =require("bcryptjs");

const bookingSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
  },
    title: {
      type: String,
      required: true,
    },
    sets: {
        type: Number,
        required: false,
    },
    confirmSet: {
      type: Number,
      required: false,
  },
    
  time: {
    type: String,
    required: false,
},
      userId: {
        type:String,
        required:false,
      },
      bdate: {
        type: Date,
        required: true,
        default:Date.now,
      },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    bookingstatus: {
      type: Boolean,
      required: true,
      default: false,
    },
    
  },
  {
    timestamps: true,
  }
);
bookingSchema.pre("save", function(next){
  var docs = this;
  mongoose.model('Booking', bookingSchema).countDocuments(function(error, counter){
      if(error) return next(error);
      docs.sets = counter+1;
     
      next();
  });   
});
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
