import React, { useEffect } from "react";
import { calculateBudget } from "../../Redux/expensesResultSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { BudgetResultWrapper, FlexDiv } from "./BudgetPlannerStyles";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { CgDanger } from "react-icons/cg";
import { width } from "../../Layout/Layout";

const BudgetResult = () => {
  const budged = useAppSelector((state) => state.budgedResult); // Redux Selector (items )
  const items = useAppSelector((state) => state.values.items);
  const disptach = useAppDispatch();

  useEffect(() => {
    disptach(calculateBudget({ items: items }));
  }, [items, disptach, budged.budget]);

  //Function that changes color depending on remaining if positive or negative number
  const RemainingIsPositive = () => {
    let isPositive = "#54bd3a";
    if (budged.negativeRemainings) {
      if (budged.negativeRemainings < 0) {
        isPositive = "#BA324F";
      }
    }
    return isPositive;
  };
  return (
    <div>
      <FlexDiv
        direction={width > 1024 ? "row" : "column"}
        width={90}
        margin="0 auto"
      >
        <BudgetResultWrapper
          width={width > 1024 ? 20 : 80}
          background="#B084CC"
          direction="column"
        >
          <div>
            <GiTakeMyMoney fontSize="40px" />
            Budged:
          </div>
          <span>{budged.budget}€</span>
        </BudgetResultWrapper>
        <BudgetResultWrapper
          width={width > 1024 ? 20 : 80}
          background="#27A58C"
          direction="column"
        >
          <div>
            <GiPayMoney fontSize="40px" /> Expenses:
          </div>
          <span>{budged.expenses}€</span>
        </BudgetResultWrapper>
        <BudgetResultWrapper
          width={width > 1024 ? 20 : 80}
          background={RemainingIsPositive()}
          direction="column"
        >
          <div>
            <GiReceiveMoney fontSize="40px" /> Remaining:
          </div>
          <span>{budged.remaining}€</span>{" "}
        </BudgetResultWrapper>
        {budged.negativeRemainings
          ? budged.negativeRemainings < 0 && (
              <BudgetResultWrapper
                style={{
                  height: "100%",
                  alignSelf: "center",
                  margin: "0 auto",
                }}
                width={width > 1024 ? 20 : 80}
                background="#f31444"
                direction="column"
              >
                <span
                  style={{
                    margin: "0 auto",
                    fontSize: "12px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CgDanger fontSize="25px" /> Negative balance:
                </span>
                <span style={{ margin: "0 auto" }}>
                  {" "}
                  {budged.negativeRemainings}€
                </span>
              </BudgetResultWrapper>
            )
          : ""}
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
