import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from "../UI/Card";

function ExpenseItem(props) {

  const title = props.title

  const removeHandler = () => {
    props.onRemove(title)
  };

  return (<li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={removeHandler}>Remove</button>
    </Card></li>
  );
}

export default ExpenseItem;
