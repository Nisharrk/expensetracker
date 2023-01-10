import React, { useState, useEffect } from "react";

export const TotalExpense = () => {
  const [total, setTotal] = useState(0); // Add a new state variable for the total sum

  useEffect(() => {
    async function fetchTotal() {
      try {
        const response = await fetch("http://localhost:8080/api/expenses/sum");
        const data = await response.json();
        setTotal(data[0].total); // Set the total state variable to the total sum
      } catch (error) {
        console.log(error);
      }
    }

    fetchTotal();
  }, []);

  return (
    <div>
      <h4>Expense Till Date</h4>
      <h1>CAD {total.toFixed(2)}</h1> {/* Display the total sum in the JSX */}
    </div>
  );
};
