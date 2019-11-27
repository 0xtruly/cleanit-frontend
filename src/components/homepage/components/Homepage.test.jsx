import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Homepage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
