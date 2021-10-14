const express =require("express");
const {addContact, findContact, updateContact, deleteContact, ContactList} =require("../controllers/contactController");
const router = express.Router();

router.route("/").post(addContact);
router.get("/single", findContact);
router.post("/edit", updateContact);
router.delete("/delete", deleteContact);
router.get("/list", ContactList);


module.exports=router;
