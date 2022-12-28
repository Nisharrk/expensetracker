const { Router } = require("express");
const Expense = require("../model/schema");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const entries = await Expense.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const expense = new Expense(req.body);
    const createdExpense = await expense.save();
    res.json(createdExpense);
  } catch (error) {
    console.log(error.name);
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
