import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filterProp = (filterYear) => {
    setSelectedYear(filterYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter passYear={selectedYear} onFilterProp={filterProp} />
        <ExpenseChart expenses={filteredExpense} />
        <ExpensesList onRemove={props.onRemove} item={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
