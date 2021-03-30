import React from "react";
import "./App.css";
import AddItems from "./components/BudgedPlannerComps/AddItems";
import BudgetResult from "./components/BudgedPlannerComps/BudgetResult";
import ShowItems from "./components/BudgedPlannerComps/ShowItems";
import BarCharts from "./components/Charts/BarCharts";
import CircleChart from "./components/Charts/CircleChart ";

function App() {
  return (
    <div>
      <BarCharts />
      <CircleChart />
      <BudgetResult />
      <AddItems />
      <ShowItems />
    </div>
  );
}

export default App;
