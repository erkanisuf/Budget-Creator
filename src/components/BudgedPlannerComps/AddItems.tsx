import React, { useRef, useState } from "react";
import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addItem } from "../../Redux/valuesSlice";
import { BudgetItem } from "../../types";
import {
  BudgetResultWrapper,
  DivAddExpense,
  PlusButton,
} from "./BudgetPlannerStyles";
import { AiOutlinePlus } from "react-icons/ai";
import { addBudgetState } from "../../Redux/expensesResultSlice";
import { v4 as uuidv4 } from "uuid";

const AddItems = () => {
  const reduxBudget = useAppSelector((state) => state.budgedResult.budget);

  const focusRef = useRef<HTMLInputElement | null>(null);
  const focusMyBudgetInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch(); // Redux
  const [item, setItem] = useState<BudgetItem>({
    name: "",
    value: 0,
    category: "",
    itemId: "",
  });

  // Input For Budget Reducer

  const [budget, setBudget] = useState<number>(0);

  //input For Budget Reducer
  const OnChangeNumberBudget = (e: React.FormEvent<HTMLInputElement>) => {
    setBudget(Number(e.currentTarget.value));
  };
  //Add budged  For Budget Reducer
  const addBudget = (e: FormEvent) => {
    e.preventDefault();

    dispatch(addBudgetState({ budget: budget }));
    setBudget(0);
  };
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
    if (reduxBudget <= 0) {
      alert("Please add budget first");
      focusMyBudgetInputRef.current?.focus();
      return;
    }
    dispatch(addItem({ ...item, itemId: uuidv4() }));
    setItem({ name: "", value: 0, category: "", itemId: "" });
    focusRef.current?.focus();
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <BudgetResultWrapper
        width={80}
        background="#474B4F"
        style={{ margin: "0 auto" }}
        direction="row"
        inputwidth={100}
      >
        <form onSubmit={addBudget}>
          <label>
            My budged:
            <input
              data-testid="addBudgetInput"
              ref={focusMyBudgetInputRef}
              required
              type="number"
              placeholder="budged"
              name="budged"
              onChange={OnChangeNumberBudget}
              value={budget}
            />
          </label>
          <PlusButton data-testid="addBudgetBtn" borderRadius>
            <AiOutlinePlus />
          </PlusButton>
        </form>
        {/* <SaveItems />  */}
        {/* Save items in case i want to create backend of this project  */}
      </BudgetResultWrapper>

      <DivAddExpense width={80} direction={`column`} inputwidth={100}>
        <form onSubmit={AddExpense}>
          <div>
            <p>Expense name</p>
            <input
              data-testid="inputName"
              required
              ref={focusRef}
              type="text"
              placeholder="name"
              name="name"
              value={item.name}
              onChange={OnChangeName}
            />
          </div>
          <div>
            <p>Cost €</p>
            <input
              data-testid="inputNumber"
              required
              type="number"
              placeholder="value"
              name="value"
              value={item.value?.toString()} // The input takes only strings
              onChange={OnChangeNumber}
            />{" "}
          </div>
          <div>
            <p>Category</p>

            <input
              data-testid="inputCategory"
              required
              type="text"
              placeholder="Item category"
              name="category"
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
            <PlusButton
              data-testid="addexpensebtn"
              borderRadius={false}
              padding={10}
            >
              {" "}
              <AiOutlinePlus />
            </PlusButton>
          </div>
        </form>
      </DivAddExpense>
    </div>
  );
};

export default AddItems;
