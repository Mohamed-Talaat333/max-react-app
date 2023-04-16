import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    const setIsEditingHandler = () => {
        setIsEditing(!isEditing);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={setIsEditingHandler}>Add New Expense</button>}
            
            {isEditing && <ExpenseForm onCancel={setIsEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;