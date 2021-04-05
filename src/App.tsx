import React from "react";
import "./App.css";
import AddItems from "./components/BudgedPlannerComps/AddItems";

import BudgetResult from "./components/BudgedPlannerComps/BudgetResult";
import SaveItems from "./components/BudgedPlannerComps/SaveItems";
import ShowItems from "./components/BudgedPlannerComps/ShowItems";
import BarCharts from "./components/Charts/BarCharts";
import CircleChart from "./components/Charts/CircleChart ";
import Layout from "./Layout/Layout";

function App() {
  console.log(process.env.REACT_APP_BACKEND_API, "xD");

  return (
    <Layout>
      <div
        style={{
          width: "50%",
          height: "100%",
          marginTop: "250px",
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
      <div style={{ width: "50%" }}>
        <CircleChart />
        <BarCharts />
      </div>
    </Layout>
  );
}

export default App;
