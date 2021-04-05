import React from "react";
import { useAppSelector } from "../../Redux/hooks";
import { ISaveSessionToDB } from "../../types";
import { FlexDiv, SaveDBButton } from "./BudgetPlannerStyles";
import { FaSave, FaDatabase } from "react-icons/fa";
const SaveItems = () => {
  const items = useAppSelector((state) => state.values.items); // Redux Selector (items )
  const budgetResults = useAppSelector((state) => state.budgedResult); // Redux Selector (items )
  const saveSessionToDB = () => {
    const datatoSend: ISaveSessionToDB = {
      user: "veskoto",
      listId: "thisislistID",
      expenses: items,
      budgetValues: {
        budget: budgetResults.budget,
        remaining: budgetResults.remaining,
        expenses: budgetResults.expenses,
        // ADD TO DAtabase Negative value too
      },
      dateAdded: "2021-04-05T16:33:07.966Z",
    };
    console.log(JSON.stringify(datatoSend));
    fetch(`${process.env.REACT_APP_BACKEND_API}/api/Values/PostExpenseList`, {
      method: "POST",
      body: JSON.stringify(datatoSend),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          console.log("SOME ERROR", res);
        }
      })
      .then((result) => console.log(result))
      .catch((err) => console.log("error", err));
  };
  return (
    <FlexDiv direction="row" justify="flex-start" width={60}>
      <SaveDBButton width={150} onClick={saveSessionToDB}>
        {" "}
        <FaSave />
        Save Session
      </SaveDBButton>
      <SaveDBButton disabled width={150} onClick={saveSessionToDB}>
        {" "}
        <FaDatabase />
        My Session
      </SaveDBButton>
    </FlexDiv>
  );
};

export default SaveItems;
