import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const addExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onFunction(newExpenseData);
    setDisplayForm(false);
  };

  const [displayForm, setDisplayForm] = useState(false)

  const callDisplay = () => {
    setDisplayForm(true);
  }

  const cancelDisplyForm = () => {
    setDisplayForm(false);
  }

  return (
    <div className="new-expense">
    {!displayForm && <button onClick={callDisplay}>Add Expense</button>}
      {displayForm && <ExpenseForm onFunction={addExpenseData} cancelDisplay={cancelDisplyForm}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
