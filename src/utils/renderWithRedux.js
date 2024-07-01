import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { Reducer } from "redux";
import configureStore from "../store";

export default function renderWithRedux(
  ui = React.ReactNode,
  mockReducers = Reducer
) {
  return {
    ...render(<Provider store={configureStore(mockReducers)}>{ui}</Provider>),
  };
}
