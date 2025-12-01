export default function ExpenseReducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "DELETE_EXPENSE":
      return state.filter((exp) => exp.id !== action.payload);

    default:
      return state;
  }
}
