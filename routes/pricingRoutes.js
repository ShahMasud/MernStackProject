const express =require("express");
const {addPricing, findpricing, updatePricing, deletePricing, pricingList} =require("../controllers/pricingController");
const router = express.Router();

router.route("/").post(addPricing);
router.get("/single", findpricing);
router.post("/edit", updatePricing);
router.delete("/delete", deletePricing);
router.get("/list", pricingList);


module.exports=router;
