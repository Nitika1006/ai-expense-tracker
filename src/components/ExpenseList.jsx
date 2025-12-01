import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

export default function ExpenseList() {
  const { state, persist } = useContext(ExpenseContext);

  return (
    <div className="card expense-list-container">
      <h3>All Expenses</h3>

      {state.length === 0 && <p>No expenses yet.</p>}

      {state.map((exp) => (
        <div className="expense" key={exp.id}>
          <span>{exp.text} — ₹{exp.amount}</span>

          <button
            className="delete-btn"
            onClick={() =>
              persist({ type: "DELETE_EXPENSE", payload: exp.id })
            }
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
