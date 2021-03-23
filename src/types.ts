import { FormEvent } from "react";

// For the Props
export interface BudgetItemArray {
  items: BudgetItem[];
  RemoveItem: (index: number) => void;
  EditItem: (index: number, editItem: BudgetItem) => void;
}
// Single Object
export interface BudgetItem {
  name: string;
  value: number | null;
}
