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

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedExpense);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Expense.deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/sum", async (req, res, next) => {
  try {
    const total = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);
    res.json(total);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
