const router = require("express").Router();
const bird_controller = require("../controllers/bird");

// get all bird
router.get("/", bird_controller.getAllBirds);

// create bird
router.post("/", bird_controller.createBird);

// update a bird
router.put("/single/:id", bird_controller.updateBirds);

// get bird by ID
router.get("/single/:id", bird_controller.getBirdByIdQuery);

// delete bird
router.delete("/", bird_controller.deleteCatByIdQuery);

module.exports = router;
