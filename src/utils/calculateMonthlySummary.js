export function calculateMonthlySummary(expenses , selectedMonth) {
  const monthlyExpenses = expenses.filter((exp) => {
    const date = new Date(exp.date);
    return date.getMonth() === selectedMonth;
  });

  const total = monthlyExpenses.reduce((acc, exp) => acc + Number(exp.amount), 0);

  // category grouping
  const categories = {};
  monthlyExpenses.forEach((exp) => {
    if (!categories[exp.category]) categories[exp.category] = 0;
    categories[exp.category] += Number(exp.amount);
  });

  return { total, categories };
}
