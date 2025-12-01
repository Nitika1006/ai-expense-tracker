import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";

export default function AddExpense() {
  const { persist } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food"); // default category

  const add = () => {
    if (!text || !amount) return;

    persist({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        text,
        amount: Number(amount),
        category,
        date: new Date().toISOString(),
      },
    });

    // reset form fields
    setText("");
    setAmount("");
    setCategory("Food"); 
  };

  return (
    <div className="card">
    <h2 className="summary-title">Add Expense</h2>

      <input
        placeholder="Expense name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* EXPENSE CATEGORY DROPDOWN */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>

      <button onClick={add}>Add</button>
    </div>
  );
}
