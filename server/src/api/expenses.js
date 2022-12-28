const { Router } = require("express");
const Expense = require("../model/schema");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "🧑‍💻",
  });
});

router.post("/", async (req, res, next) => {
  try {
    const expense = new Expense(req.body);
    const createdExpense = await expense.save();
    res.json(createdExpense);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
