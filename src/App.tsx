import React from "react";
import "./App.css";
import AddItems from "./components/BudgedPlannerComps/AddItems";
import BudgetResult from "./components/BudgedPlannerComps/BudgetResult";
import ShowItems from "./components/BudgedPlannerComps/ShowItems";
import BarCharts from "./components/Charts/BarCharts";
import CircleChart from "./components/Charts/CircleChart ";

function App() {
  const test = () => {
    fetch("http://localhost:5000/api/Values/PostExpenseList", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",

      body: JSON.stringify({
        user: "g",
        expenses: [{ name: "gg", value: 2, category: "catkur" }],
      }),
    })
      .then((el) => {
        return el.json();
      })
      .then((el) => console.log(el))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={test}>LIK</button>
      <BarCharts />
      <CircleChart />
      <BudgetResult />
      <AddItems />
      <ShowItems />
    </div>
  );
}

export default App;
