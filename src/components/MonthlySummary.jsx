import { useContext, useState, useEffect } from "react";
import ExpenseContext from "../context/ExpenseContext";
import { calculateMonthlySummary } from "../utils/calculateMonthlySummary";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthlySummary = () => {
  const { state: expenses } = useContext(ExpenseContext);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [summary, setSummary] = useState({ total: 0, categories: {} });

  useEffect(() => {
    const data = calculateMonthlySummary(expenses || [], selectedMonth);
    setSummary(data);
  }, [expenses, selectedMonth]);

  const chartData = {
    labels: Object.keys(summary.categories),
    datasets: [
      {
        label: "Expenses by Category",
        data: Object.values(summary.categories),
        backgroundColor: '#4f46e5',
      },
    ],
  };

  return (
    <div className="card">
      <h2 className="summary-title">Monthly Summary</h2>
      
      <select
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
        value={selectedMonth}
        style={{ padding: "8px" }}
      >
        {months.map((m, i) => (
          <option key={i} value={i}>
            {m}
          </option>
        ))}
      </select>

      <h3>Total Spent: ₹{summary.total}</h3>

      {Object.keys(summary.categories).length > 0 ? (
        <Bar data={chartData} />
      ) : (
        <p>No expenses done for the month.</p>
      )}
    </div>
  );
};

export default MonthlySummary;
