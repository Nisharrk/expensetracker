const mongoose = require("mongoose");

const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    date: Date,
    notes: String,
  },
  {
    timestamps: true, // this creates createdAt and updatedAt properties
  }
);

const expense = mongoose.model("Expense", expenseSchema);

module.exports = expense;
