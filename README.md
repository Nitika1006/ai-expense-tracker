🧾 AI-Powered Expense Tracker (React + LocalStorage + Speech Recognition)

A clean, modern, and intelligent expense tracker built using React, featuring:

💬 AI-like Speech Input for adding expenses using voice

📅 Monthly Insights & Charts (Chart.js)

🎯 Category-wise analytics

💾 LocalStorage persistence

🎨 Responsive, dashboard-style UI

⚡ Fast, lightweight, no backend required

This project is built as part of my full-stack learning journey and demonstrates React fundamentals, state management, reducers, context API, analytics, UI design, and browser APIs.

----------------------------------------------

🚀 Features

✅ Add & Manage Expenses

Add expense name, amount, category, and date

Delete individual expenses

Smooth UI with instant updates

🎙 AI-Powered Speech Input (Web Speech API)

Add expenses using your voice, example:

“Add 200 rupees for groceries”
“Spent 350 on travel”

The system extracts:
✔ amount
✔ category
✔ description
Automatically converts it into an expense entry.

📊 Monthly Summary Dashboard

Month selector

Total monthly spending

Category-wise breakdown

Bar chart visualization with Chart.js

📈 Advanced Insights

Total spent

Highest category

Daily averages

Smart analytics

💾 LocalStorage Saving

Your expenses remain saved even after page refresh or browser restart.

🖥 Clean Dashboard Layout

Left panel : Monthly summary + insights

Right panel : Add expense + list with scrollbar

Modern glass-card UI

Responsive for all screen sizes

----------------------------------------------

🛠 Tech Stack
Frontend

React (useState, useReducer, useEffect, Context API)

JavaScript ES6+

Chart.js

Web Speech API

CSS3 (custom modern UI)

Storage

Browser LocalStorage

----------------------------------------------

📂 Project Structure
src/
│── components/
│   ├── AddExpense.jsx
│   ├── ExpenseList.jsx
│   ├── MonthlySummary.jsx
│   ├── Insights.jsx 
│   └── SpeechInput.jsx
│
│── context/
│   ├── ExpenseContext.js
│   └── ExpenseReducer.js
│
│── utils/
│   └── calculateMonthlySummary.js
│
│── hooks/
│   └── useLocalStorage.js
│
│── App.jsx
│── index.js
│── styles.css

----------------------------------------------

▶️ How to Run Locally
# Clone the repo
git clone https://github.com/your-username/ai-expense-tracker.git

# Install dependencies
npm install

# Start the development server
npm start


The app will open on:

http://localhost:3000

----------------------------------------------


🧠 How the AI Speech Input Works

This project uses the Web Speech API, which extracts text from voice and then applies:

Amount detection (parseInt or RegEx)

Category detection using predefined keywords

Description extraction

Auto-creation of expense objects

This gives it an AI-powered experience without needing a backend or OpenAI API.

----------------------------------------------

📦 Future Enhancements

Dark mode

Export expenses as CSV / PDF

Custom categories

Budget alerts

Trends over time (line charts)

Integration with OpenAI for natural-language parsing
