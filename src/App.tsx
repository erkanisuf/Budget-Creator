import React from "react";
import "./App.css";
import AddItems from "./components/BudgedPlannerComps/AddItems";

import BudgetResult from "./components/BudgedPlannerComps/BudgetResult";

import ShowItems from "./components/BudgedPlannerComps/ShowItems";
import BarCharts from "./components/Charts/BarCharts";
import CircleChart from "./components/Charts/CircleChart ";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: "1" }}>
          <BudgetResult />
          <AddItems />
        </div>
        <div style={{ flex: "2" }}>
          <ShowItems />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <CircleChart />
        <BarCharts />
      </div>
    </Layout>
  );
}

export default App;
