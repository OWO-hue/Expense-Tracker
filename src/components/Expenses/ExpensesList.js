import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>
  }
  return (
    <ul className="expenses-list">
      {
        (props.item.map((expense) => (
          <ExpenseItem
            onRemove={props.onRemove}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
    </ul>
  );
};

export default ExpensesList;
