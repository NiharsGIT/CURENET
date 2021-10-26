import React from "react";
import ReactDOM from "react-dom";
import Task2 from "./Task_2/Task2";
import { createStore } from "redux";
import Reducers from "./Task_2/reducers/combine";
import { Provider } from "react-redux";

const MyStore = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={MyStore}>
    <div>
      <Task2 />
    </div>
  </Provider>,
  document.getElementById("root")
);
