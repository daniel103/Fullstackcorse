const router = require("express").Router();
const cat_controller = require("../controllers/cat");

// get all cats
router.get("/", cat_controller.getAllCat);

//create new cat
router.post("/", cat_controller.createCat);

// update a cat
router.put("/", cat_controller.updateCat);

// get cat by ID
router.get("/single/:id", cat_controller.getCatByIdQuery);

// delete cat
router.delete("/", cat_controller.deleteCatByIdQuery);

module.exports = router;
