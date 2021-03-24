import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { BudgetItem, BudgetResults } from "../types";

const initialState: BudgetResults = {
  budget: 0,
  expenses: 2,
  remaining: 0,
};

export const expensesResultSlice = createSlice({
  name: "budgedResult",
  initialState: {
    budget: 0,
    expenses: 2,
    remaining: 0,
  },
  reducers: {
    calculateBudget: (state, action: PayloadAction<BudgetItem[]>) => {
      const expenses = action.payload.reduce(
        (a: any, b: any) => a + b.value,
        0
      );
      // Calculate Remaining
      // Add Budget
      console.log(expenses);
      return (state = { budget: 11, expenses: expenses, remaining: 122 });
    },
  },
});

export const { calculateBudget } = expensesResultSlice.actions;
export const selectCount = (state: RootState) => state;

export default expensesResultSlice.reducer;
