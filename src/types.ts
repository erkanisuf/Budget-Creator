import { FormEvent } from "react";
//Redux interfaces
//Interface for expenses List
export interface ExpensesList {
  items: BudgetItem[];
}
//Interface for results - budged,remaining,total expenses value:
export interface BudgetResults {
  budget: number;
  expenses: number;
  remaining: number;
}

//Redux interface for editing the item (index) is send by the function so we can edit the selected item
export interface EditExpenseProps {
  index: number;
  editeitemValues: BudgetItem;
}

// Single Object for Expenses
export interface BudgetItem {
  name: string;
  value: number;
}
