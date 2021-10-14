const asyncHandler =require("express-async-handler");
const Pricing=require("..//models/pricingModel");

const addPricing = asyncHandler(async (req, res) => {
  const {name, type, price } = req.body;

  
   const user = await Pricing.create({
        name,
        type,
        price,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          type: user.type,
          price: user.price,
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
      
});
 const findpricing = asyncHandler(async (req, res) => {
   const { _id } = req.body
   const user = await Pricing.findOne({ _id })
   
   if(user)
   {
    res.json({
      _id: user._id,
      name: user.name,
      type: user.type,
      price: user.price,
    });
   }
   else{
    res.json({
      mesg:"Record Not Found ",
    });
   }
 });



 const updatePricing = asyncHandler(async (req, res) => {
 const { _id, name, type, price } = req.body;
 const bEdit = await Pricing.findById(_id);

  if (bEdit) {
    bEdit.name = req.body.name;
    bEdit.type = req.body.type;
    bEdit.price = req.body.price;
    
    const updatedUser = await bEdit.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      type: updatedUser.type,
      price: updatedUser.price,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
const deletePricing = asyncHandler(async (req, res) => {
  const {_id} = req.body;
  const bEdit = await Pricing.findByIdAndRemove(_id, (error, data) => {
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


const pricingList = asyncHandler(function (req, res) {
  Pricing.find(function (error, data)  {
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


module.exports={addPricing, findpricing, updatePricing, deletePricing, pricingList};
