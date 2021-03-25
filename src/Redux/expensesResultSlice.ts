import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { BudgetItem, BudgetProps, BudgetResults } from "../types";

const initialState: BudgetResults = {
  budget: 0,
  expenses: 0,
  remaining: 0,
};

export const expensesResultSlice = createSlice({
  name: "budgedResult",
  initialState,
  reducers: {
    calculateBudget: (state, action: PayloadAction<BudgetProps>) => {
      const budget = action.payload.budget;
      const expenses = action.payload.items.reduce(
        (a: any, b: any) => a + b.value,
        0
      );
      const remaining = action.payload.budget - expenses;
      // Add Budget
      console.log(expenses);
      return (state = {
        budget: budget,
        expenses: expenses,
        remaining: remaining,
      });
    },
  },
});

export const { calculateBudget } = expensesResultSlice.actions;
export const selectCount = (state: RootState) => state;

export default expensesResultSlice.reducer;
