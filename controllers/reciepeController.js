const Receipe = require("./../models/reciepeModel");

exports.createRecipe = async (req, res) => {
  try {
    const receipe = await Receipe.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        receipe,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const receipes = await Receipe.find();
    res.status(200).json({
      status: "Success",
      data: {
        result: receipes.length,
        receipes: receipes,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const receipe = await Receipe.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        receipe,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const receipe = await Receipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success",
      data: {
        receipe,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const receipe = await Receipe.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success",
      data: {
        receipe,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error.message,
    });
  }
};
