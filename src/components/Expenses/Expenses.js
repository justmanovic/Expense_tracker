import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const onChangeOfYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  // const filteredExpenses = props.expensesArr.filter(
  //   (expense) => expense.date.getFullYear().toString() === year
  // );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeOfYear={onChangeOfYearHandler} />
      {props.expensesArr
        .filter((expense) => expense.date.getFullYear().toString() === year)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </Card>
  );
};

export default Expenses;
