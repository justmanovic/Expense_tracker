import React, { useState } from "react";
import Card from "../UI/Card";
import "./expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const onChangeOfYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expensesArr.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeOfYear={onChangeOfYearHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
