import React, { FormEvent, useEffect, useState } from "react";
import { calculateBudget } from "../../Redux/expensesResultSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  BudgetResultWrapper,
  FlexDiv,
  PlusButton,
} from "./BudgetPlannerStyles";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
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
      <FlexDiv direction="row" width={40} margin="0 auto">
        <BudgetResultWrapper width={20} background="#B084CC" direction="column">
          <div>
            <GiTakeMyMoney fontSize="40px" />
            Budged:
          </div>
          <span>{budged.budget}€</span>
        </BudgetResultWrapper>
        <BudgetResultWrapper width={20} background="#27A58C" direction="column">
          <div>
            <GiPayMoney fontSize="40px" /> Expenses:
          </div>
          <span>{budged.expenses}€</span>
        </BudgetResultWrapper>
        <BudgetResultWrapper width={20} background="#BA324F" direction="column">
          <div>
            <GiReceiveMoney fontSize="40px" /> Remaining:
          </div>
          <span>{budged.remaining}€</span>
        </BudgetResultWrapper>
      </FlexDiv>
      <FlexDiv
        direction="row"
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          margin: "15px auto",
        }}
        width={80}
      >
        <BudgetResultWrapper
          width={50}
          background="#474B4F"
          style={{ margin: "0 auto" }}
          direction="row"
          inputwidth={100}
        >
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
            <PlusButton borderRadius>
              <AiOutlinePlus />
            </PlusButton>
          </form>
        </BudgetResultWrapper>
      </FlexDiv>
    </div>
  );
};

export default BudgetResult;
