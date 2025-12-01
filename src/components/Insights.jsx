import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

export default function Insights() {
  const { state } = useContext(ExpenseContext);

  const monthly = state.reduce((acc, exp) => {
    const month = new Date(exp.date).toLocaleString("en", {
      month: "short",
      year: "numeric",
    });

    acc[month] = (acc[month] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="card">
      <h3>Monthly Insights</h3>

      {Object.keys(monthly).map((m) => (
        <p key={m}>
          <strong>{m}:</strong> ₹{monthly[m]}
        </p>
      ))}
    </div>
  );
}
