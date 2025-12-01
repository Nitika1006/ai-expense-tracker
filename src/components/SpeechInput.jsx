import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

export default function SpeechInput() {
  const { persist } = useContext(ExpenseContext);

  const start = () => {
    const sr = new window.webkitSpeechRecognition();
    sr.lang = "en-IN";
    sr.start();

    sr.onresult = (e) => {
      const text = e.results[0][0].transcript; // e.g., "spent 200 on groceries"

      const match = text.match(/(\d+)/);
      const amount = match ? Number(match[1]) : null;

      const words = text.replace(String(amount), "").replace("on", "").trim();

      if (amount && words) {
        persist({
          type: "ADD_EXPENSE",
          payload: {
            id: Date.now(),
            text: words,
            amount,
            date: new Date().toISOString(),
          },
        });
      }
    };
  };

  return (
    <button className="speech-btn" onClick={start}>
      🎤 Add using Voice
    </button>
  );
}
