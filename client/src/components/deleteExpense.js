export const DeleteExpense = async (expenseId, expenses, setExpenses) => {
  // Use the expenses and setExpenses functions passed as props to update the expenses list in the parent component
  try {
    await fetch(`http://localhost:8080/api/expenses/${expenseId}`, {
      method: "DELETE",
    });
    setExpenses(expenses.filter((expense) => expense._id !== expenseId));
  } catch (error) {
    console.log(error);
  }
};
