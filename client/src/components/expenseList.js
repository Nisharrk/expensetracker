import React from "react";

export const ExpenseList = () => {
  return (
    <div>
      <h3>Expenses</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>CAD 400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
