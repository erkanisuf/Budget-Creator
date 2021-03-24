import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { BudgetItem, ExpensesList, EditExpenseProps } from "../types";

// Define the initial state using that type
// This is the Initial State
const initialState: ExpensesList = {
  items: [],
};

export const valuesSlice = createSlice({
  name: "values",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addItem: (state, action: PayloadAction<BudgetItem>) => {
      state.items = [...state.items, action.payload];
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      console.log("increment");
      const copiedState = [...state.items];
      copiedState.splice(action.payload, 1);
      state.items = copiedState;
    },
    editExpense: (state, action: PayloadAction<EditExpenseProps>) => {
      console.log(action, "edit");
      const copiedState = [...state.items];
      copiedState[action.payload.index] = action.payload.editeitemValues;
      state.items = copiedState;
    },
  },
});

export const { deleteItem, addItem, editExpense } = valuesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default valuesSlice.reducer;
