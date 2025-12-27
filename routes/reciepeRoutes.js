const express = require("express");
const reciepeController = require("./../controllers/reciepeController");
const router = express.Router();

router
  .route("/")
  .get(reciepeController.getAllRecipes)
  .post(reciepeController.createRecipe);
router
  .route("/:id")
  .get(reciepeController.getRecipeById)
  .delete(reciepeController.deleteRecipe)
  .patch(reciepeController.updateRecipe);

module.exports = router;
