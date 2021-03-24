import React, { useState } from "react";
import { FormEvent } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { addItem } from "../../Redux/valuesSlice";
import { BudgetItem } from "../../types";
import BudgetResult from "./BudgetResult";
import ShowItems from "./ShowItems";

const AddItems = () => {
  const dispatch = useAppDispatch(); // Redux
  const [item, setItem] = useState<BudgetItem>({ name: "", value: 0 });

  //Changing the name of expense
  const OnChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setItem({ ...item, [e.currentTarget.name]: e.currentTarget.value });
  };
  //Changing the value  of expense
  const OnChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setItem({
      ...item,
      [e.currentTarget.name]: Number(e.currentTarget.value),
    });
  };

  //Submit the item and add it to list
  const AddExpense = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addItem(item));
    setItem({ name: "", value: 0 });
  };

  return (
    <div>
      <BudgetResult />
      <form onSubmit={AddExpense}>
        <label>
          <p>Name</p>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={item.name}
            onChange={OnChangeName}
          />
        </label>
        <label>
          <p>Value</p>
          <input
            type="number"
            placeholder="value"
            name="value"
            value={item.value?.toString()} // The input takes only strings
            onChange={OnChangeNumber}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <ShowItems />
    </div>
  );
};

export default AddItems;
