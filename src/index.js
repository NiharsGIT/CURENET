import React from "react";
import ReactDOM from "react-dom";
import FunctionComponent from "./functionView";
import ClassComponent from "./classView";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div
      style={{
        position: "absolute",
        top: "30vh",
        left: "30vw",
      }}
    >
      <h3>Function Component</h3>
      <FunctionComponent />
      <h3>Class Component</h3>
      <ClassComponent />
    </div>
  </Provider>,
  document.getElementById("root")
);
