const asyncHandler =require("express-async-handler");
const Booking=require("..//models/bookingModel");

const addBooking = asyncHandler(async (req, res) => {
  const {name, email, type, time, title, sets, confirmSet, userId, bdate, status, bookingstatus } = req.body;

  
   const user = await Booking.create({
        name,
        email,
        type,
        time,
        title,
        sets,
        confirmSet,
        userId,
        bdate,
        status,
        bookingstatus,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          type: user.type,
          time: user.time,
          email: user.email,
          title: user.title,
          sets: user.sets,
          sets: user.sets,
          confirmSet: user.confirmSet,
          bookingstatus: user.bookingstatus,
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
  
});
 const findbooking = asyncHandler(async (req, res) => {
   const { _id } = req.body
   const user = await Booking.findOne({ _id })
   
   if(user)
   {
    res.json({
      _id: user._id,
      name: user.name,
      type: user.type,
      time: user.time,
      email: user.email,
      title: user.title,
      sets: user.sets,
      confirmSet: user.confirmSet,
      bdate: user.bdate,
      status: user.status,
      bookingstatus: user.bookingstatus,
    });
   }
   else{
    res.json({
      mesg:"Record Not Found ",
    });
   }
 });



 const updateBooking = asyncHandler(async (req, res) => {
  const { _id, name, email, title, sets, confirmSet, bdate, status,bookingstatus } = req.body;
  const bEdit = await Booking.findById(_id);

  if (bEdit) {
    bEdit.name = req.body.name;
    bEdit.email = req.body.email;
    bEdit.title = req.body.title;
    bEdit.type = req.body.type;
    bEdit.time = req.body.time;
    bEdit.sets = req.body.sets ;
    bEdit.confirmSet = req.body.confirmSet ;
    bEdit.bdate = req.body.bdate ;
    bEdit.status = req.body.status;
    bEdit.bookingstatus = req.body.bookingstatus;
    
    const updatedUser = await bEdit.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      title: updatedUser.title,
      type: updatedUser.type,
      time: updatedUser.time,
      sets: updatedUser.sets,
      confirmSet: updatedUser.confirmSet,
      bdate: updatedUser.bdate,
      status: updatedUser.status,
      bookingstatus: updatedUser.bookingstatus,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
const deleteBooking = asyncHandler(async (req, res) => {
  const {_id} = req.body;
  const bEdit = await Booking.findByIdAndRemove(_id, (error, data) => {
    if (error) {
      res.status(200).json({
        msg: "Record Not  found"
      })
    }
    else {
      res.status(200).json({
        msg: "Record Deleted Successed"
      })
    }
  })
});


const bookingList = asyncHandler(function (req, res) {
  Booking.find(function (error, data)  {
    if (error) {
      res.status(200).json({
        msg: "Record Not  found"
      })
    }
    else {
      res.json(data);
    }
  })
});


module.exports={addBooking, findbooking, updateBooking, deleteBooking, bookingList};
