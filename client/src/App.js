import "./App.css";
import { Header } from "./components/header.js";
import { TotalExpense } from "./components/totalExpense.js";
import { ExpenseList } from "./components/expenseList";
import { AddTransaction } from "./components/addTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <TotalExpense />
        <ExpenseList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
