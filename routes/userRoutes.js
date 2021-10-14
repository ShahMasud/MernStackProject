const express =require("express");
const {registerUser, authUser} =require("../controllers/userController");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);


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
