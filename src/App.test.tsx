import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";

import App from "./App";
import Button from "./Button";

test("renders content", () => {
  const note = {
    label: "normal button",
  };

  const component = render(<Button label={note.label} />);

  expect(component.container).toHaveTextContent("normal button"); // looks fot rhe stirng in the whole document
  component.debug(); //Shows in terminal the html structure
});

test("clicking the button calls event handler once", () => {
  const note = {
    label: "normal button",
  };

  const mockHandler = jest.fn();

  const component = render(
    <Button label={note.label} toggleImportance={mockHandler} />
  );

  const button = component.getByText("normal button");
  fireEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
