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
  negativeRemainings?: number;
}
// Interface for Budget with two arguments, first one takes state(items) and second one the added budget from BudgetResult.tsx
export interface IcalculateBudget {
  items: BudgetItem[];
}
export interface BudgetProps {
  budget: number;
}
//Redux interface for editing the item (index) is send by the function so we can edit the selected item
export interface EditExpenseProps {
  index: number;
  editeitemValues: BudgetItem;
}

// Single Object for Expenses
export interface BudgetItem {
  name: string;
  itemId: string;
  value: number;
  category: string;
}

//DATABASE Types
//Post Request to save Expenses and Budget Results .The whole session model

export interface ISaveSessionToDB {
  user: string;
  listId: string;
  expenses: BudgetItem[];
  budgetValues: {
    budget: number;
    remaining: number;
    expenses: number;
  };
  dateAdded: string;
}
