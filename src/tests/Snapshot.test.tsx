import React from "react";

import renderer from "react-test-renderer";

import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Layout from "../Layout/Layout";
import BarCharts from "../components/Charts/BarCharts";
import CircleChart from "../components/Charts/CircleChart ";
import ShowItems from "../components/BudgedPlannerComps/ShowItems";
import BudgetResult from "../components/BudgedPlannerComps/BudgetResult";
import AddItems from "../components/BudgedPlannerComps/AddItems";
it("<Layout>", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Layout>
          <h1>Test</h1>
        </Layout>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<BarCharts>", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BarCharts />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<CircleChart>", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CircleChart />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<ShowItems>", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ShowItems />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<BudgetResult>", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BudgetResult />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("<AddItems>", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AddItems />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
