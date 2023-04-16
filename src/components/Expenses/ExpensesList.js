import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="espenses-list__fallback">Found No Expenses.</h2>;
  }

  return props.items.map((item) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    </ul>
  ));
};

export default ExpensesList;
