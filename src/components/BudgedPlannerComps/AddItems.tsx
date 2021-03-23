import React, { useState } from "react";
import { FormEvent } from "react";
import { BudgetItem } from "../../types";
import ShowItems from "./ShowItems";

const AddItems = () => {
  const [item, setItem] = useState<BudgetItem>({ name: "", value: 0 });
  const [items, setItems] = useState<BudgetItem[]>([]);
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
  console.log(item);
  console.log(items);
  //Submit the item and add it to list
  const AddExpense = (e: FormEvent) => {
    e.preventDefault();
    setItems([...items, item]);
    setItem({ name: "", value: 0 });
  };
  //Remove item from the expenses list
  const RemoveItem = (index: number) => {
    const copyState = [...items];
    copyState.splice(index, 1);
    setItems(copyState);
  };
  const EditItem = (index: number, el: BudgetItem) => {
    console.log(index);
    console.log(el);
    const copyState = [...items];
    copyState[index] = el;
    setItems(copyState);
  };
  return (
    <div>
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
      <ShowItems items={items} RemoveItem={RemoveItem} EditItem={EditItem} />
    </div>
  );
};

export default AddItems;
