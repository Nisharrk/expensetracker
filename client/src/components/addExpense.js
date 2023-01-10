import React from "react";
import { useState } from "react";

export const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { name, amount, notes };
      const response = await fetch("http://localhost:8080/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setName("");
    setAmount(0);
    setNotes("");

    e.target.reset();
  };

  return (
    <div>
      <h3>Add New Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="notes">Note</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter notes..."
          />
        </div>
        <button type="submit" className="btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};
