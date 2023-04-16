import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();
  // const [filteredExpensesArrayByYear, setFilteredExpensesArrayByYear] = useState(props.items.filter((item) => item.date.getFullYear() === +filteredYear));

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setFilteredExpensesArrayByYear(props.items.filter((item) => item.date.getFullYear() === +selectedYear));
  };

  const filteredExpensesByYear = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />

      <ExpensesList items={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;
