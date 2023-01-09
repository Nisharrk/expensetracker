import "./App.css";
import { Header } from "./components/header.js";
import { TotalExpense } from "./components/totalExpense.js";
import { ExpenseList } from "./components/expenseList";
import { AddExpense } from "./components/addExpense";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <TotalExpense />
        <ExpenseList />
        <AddExpense />
      </div>
    </div>
  );
}

export default App;
