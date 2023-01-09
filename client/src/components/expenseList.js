import React, { useState, useEffect } from "react";
import { DeleteExpense } from "./deleteExpense";

export const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await fetch("http://localhost:8080/api/expenses");
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchExpenses();
  }, []);

  return (
    <div>
      <h3>Expenses</h3>
      <ul className="list">
        {expenses.map((expense) => (
          <li key={expense._id} className="minus">
            {expense.name} <span>{expense.amount}</span>
            <button
              onClick={() => DeleteExpense(expense._id)}
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
