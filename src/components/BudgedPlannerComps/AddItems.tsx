import React, { useRef, useState } from "react";
import { FormEvent } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { addItem } from "../../Redux/valuesSlice";
import { BudgetItem } from "../../types";
import { DivAddExpense, PlusButton } from "./BudgetPlannerStyles";
import { AiOutlinePlus } from "react-icons/ai";
const AddItems = () => {
  const focusRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch(); // Redux
  const [item, setItem] = useState<BudgetItem>({
    name: "",
    value: 0,
    category: "",
  });

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
    setItem({ name: "", value: 0, category: "" });
    focusRef.current?.focus();
  };

  return (
    <DivAddExpense width={40} direction={`column`} inputwidth={100}>
      <form onSubmit={AddExpense}>
        <div>
          <p>Expense name</p>
          <input
            ref={focusRef}
            type="text"
            placeholder="name"
            name="name"
            value={item.name}
            onChange={OnChangeName}
          />
        </div>
        <div>
          <p>Cost</p>

          <input
            type="number"
            placeholder="value"
            name="value"
            value={item.value?.toString()} // The input takes only strings
            onChange={OnChangeNumber}
          />
          <span> €</span>
        </div>
        <div>
          <p>Category</p>

          <input
            type="text"
            placeholder="Item category"
            name="Item Category"
            value={item.category} // The input takes only strings
            onChange={OnChangeName}
          />
        </div>
        <div
          style={{
            flex: 0,
            alignSelf: "flex-end",
          }}
        >
          <PlusButton borderRadius={false} padding={10}>
            {" "}
            <AiOutlinePlus />
          </PlusButton>
        </div>
      </form>
    </DivAddExpense>
  );
};

export default AddItems;
