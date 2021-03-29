import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { BudgetProps, BudgetResults, IcalculateBudget } from "../types";

const initialState: BudgetResults = {
  budget: 0,
  expenses: 0,
  remaining: 0,
};

export const expensesResultSlice = createSlice({
  name: "budgedResult",
  initialState,
  reducers: {
    calculateBudget: (state, action: PayloadAction<IcalculateBudget>) => {
      const expenses = action.payload.items.reduce(
        (a: any, b: any) => a + b.value,
        0
      );
      const remaining = state.budget - expenses;
      // Add Budget
      console.log(expenses);
      return (state = {
        ...state,
        expenses: expenses,
        remaining: remaining < 0 ? 0 : remaining,
      });
    },
    addBudgetState: (state, action: PayloadAction<BudgetProps>) => {
      return (state = {
        ...state,
        budget: action.payload.budget,
      });
    },
  },
});

export const { calculateBudget, addBudgetState } = expensesResultSlice.actions;
export const selectCount = (state: RootState) => state;

export default expensesResultSlice.reducer;
