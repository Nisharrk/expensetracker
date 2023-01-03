import React from "react";
import { useState } from "react";

export const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="name">Text</label>
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
        <button class="btn">Add transaction</button>
      </form>
    </div>
  );
};
