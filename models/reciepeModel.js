const mongoose = require("mongoose");

const receipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: [String],
  instructions: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Receipe = mongoose.model("Receipe", receipeSchema);

module.exports = Receipe;
