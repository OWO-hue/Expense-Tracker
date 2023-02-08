import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Digital Piano",
    amount: 200,
    date: new Date(2022, 1, 1),
  },
  {
    id: "e6",
    title: "Nintendo Switch",
    amount: 299,
    date: new Date(2022, 9, 12),
  },
  {
    id: "e7",
    title: "Xbox",
    amount: 400,
    date: new Date(2022, 10, 11),
  },
  {
    id: "e8",
    title: "Nike shoes",
    amount: 400,
    date: new Date(2023, 1, 20),
  },
  {
    id: "e9",
    title: "Udemy course",
    amount: 20,
    date: new Date(2023, 1, 7),
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummy);

  const finalDataHandler = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  const removeDadtaHandler = (rmTitle) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.title !== rmTitle)
    })
  }
  return (
    <div>
      <NewExpense onFunction={finalDataHandler}/>
      <Expenses onRemove={removeDadtaHandler} items={expenses} />
    </div>
  );
}

export default App;
