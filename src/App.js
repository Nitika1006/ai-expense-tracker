import { useReducer } from "react";
import ExpenseReducer from "./context/ExpenseReducer";
import ExpenseContext from "./context/ExpenseContext";
import useLocalStorage from "./hooks/useLocalStorage";

import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Insights from "./components/Insights";
import MonthlySummary from "./components/MonthlySummary";
import SpeechInput from "./components/SpeechInput";

import "./styles.css";

function App() {
  const [savedExpenses, saveExpenses] = useLocalStorage("expenses", []);
  const [state, dispatch] = useReducer(ExpenseReducer, savedExpenses);

  // syncing reducer to localStorage
  const persist = (action) => {
    const updated = ExpenseReducer(state, action);
    saveExpenses(updated);
    dispatch(action);
  };

  return (
    <ExpenseContext.Provider value={{ state, persist }}>
      <div className="dashboard">
        {/* LEFT SIDE PANEL*/}
        <div className="left-panel">
          <Insights />
          <MonthlySummary />
        </div>

        {/* RIGHT SIDE PANEL*/}
        <div className="right-panel">
          <SpeechInput />
          <AddExpense />
          <ExpenseList />
        </div>
      </div>
    </ExpenseContext.Provider>
  );
}

export default App;
