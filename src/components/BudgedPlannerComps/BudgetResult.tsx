import React, { FormEvent, useEffect, useState } from "react";
import { calculateBudget } from "../../Redux/expensesResultSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const BudgetResult = () => {
  const budged = useAppSelector((state) => state.budgedResult); // Redux Selector (items )
  const items = useAppSelector((state) => state.values.items);
  const disptach = useAppDispatch();
  const [input, setInput] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);

  //input
  const OnChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(Number(e.currentTarget.value));
  };
  //Add budged
  const addBudget = (e: FormEvent) => {
    e.preventDefault();
    setBudget(input);
    setInput(0);
    disptach(calculateBudget({ items: items, budget: budget }));
  };

  useEffect(() => {
    disptach(calculateBudget({ items: items, budget: budget }));
  }, [items, disptach, budget]);
  return (
    <div>
      <form onSubmit={addBudget}>
        <label>
          My budged:
          <input
            type="number"
            placeholder="budged"
            name="budged"
            onChange={OnChangeNumber}
            value={input}
          />
        </label>
        <input type="submit" value="Add Budget " />
      </form>
      <p>
        Budged:<span>{budged.budget}</span>
      </p>
      <p>
        Expenses:<span>{budged.expenses}</span>
      </p>
      <p>
        Remaining:<span>{budged.remaining}</span>
      </p>
    </div>
  );
};

export default BudgetResult;
