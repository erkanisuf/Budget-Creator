import React, { FormEvent, useEffect, useState } from "react";
import { calculateBudget } from "../../Redux/expensesResultSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

const BudgetResult = () => {
  const budged = useAppSelector((state) => state.budgedResult); // Redux Selector (items )
  const items = useAppSelector((state) => state.values.items);
  const disptach = useAppDispatch();
  const [budget, setBudget] = useState<number | null>(null);

  //input
  const OnChangeNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setBudget(Number(e.currentTarget.value));
  };
  //Add budged
  const calculateBudged = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {}, [items, disptach]);
  return (
    <div>
      <button onClick={() => disptach(calculateBudget(items))}>KUR</button>
      <form onSubmit={calculateBudged}>
        <label>
          My budged:
          <input
            type="numbert"
            placeholder="budged"
            name="budged"
            onChange={OnChangeNumber}
            value={budget?.toString()}
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
