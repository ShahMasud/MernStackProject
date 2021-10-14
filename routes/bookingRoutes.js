const express =require("express");
const {addBooking, findbooking, updateBooking, deleteBooking, bookingList} =require("../controllers/bookingController");
const router = express.Router();

router.route("/").post(addBooking);
router.get("/single", findbooking);
router.post("/edit", updateBooking);
router.delete("/delete", deleteBooking);
router.get("/list", bookingList);


module.exports=router;
// import {
//   authUser,
//   registerUser,
//   updateUserProfile,
// } from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";
// const router = express.Router();

// router.route("/").post(registerUser);
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);

// export default router;
