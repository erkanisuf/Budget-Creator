import React, { useEffect } from "react";
import { calculateBudget } from "../../Redux/expensesResultSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { BudgetResultWrapper, FlexDiv } from "./BudgetPlannerStyles";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";

const BudgetResult = () => {
  const budged = useAppSelector((state) => state.budgedResult); // Redux Selector (items )
  const items = useAppSelector((state) => state.values.items);
  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(calculateBudget({ items: items }));
  }, [items, disptach, budged.budget]);
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
      ></FlexDiv>
    </div>
  );
};

export default BudgetResult;
