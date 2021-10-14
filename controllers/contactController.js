const asyncHandler =require("express-async-handler");
const Contact=require("..//models/contactModel");

const addContact = asyncHandler(async (req, res) => {
  const {name, email, subject, message } = req.body;

  
   const contact = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      if (contact) {
        res.status(201).json({
          _id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          message: contact.message,
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
      
});
 const findContact = asyncHandler(async (req, res) => {
   const { _id } = req.body
   const contact = await Contact.findOne({ _id })
   
   if(contact)
   {
    res.json({
        _id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
    });
   }
   else{
    res.json({
      mesg:"Record Not Found ",
    });
   }
 });



 const updateContact = asyncHandler(async (req, res) => {
 const { _id, name, email, subject, message } = req.body;
 const bEdit = await Contact.findById(_id);

  if (bEdit) {
    bEdit.name = req.body.name;
    bEdit.email = req.body.email;
    bEdit.subject = req.body.subject;
    bEdit.message = req.body.message;
    
    const updatedUser = await bEdit.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      subject: updatedUser.subject,
      message: updatedUser.message,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
const deleteContact = asyncHandler(async (req, res) => {
  const {_id} = req.body;
  const bEdit = await Contact.findByIdAndRemove(_id, (error, data) => {
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


const ContactList = asyncHandler(function (req, res) {
    Contact.find(function (error, data)  {
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


module.exports={addContact, findContact, updateContact, deleteContact, ContactList};
