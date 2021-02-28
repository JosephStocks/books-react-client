import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import SavedBooks from "./SavedBooks";
import BaseLayout from "./layout/BaseLayout";
import "./modern-normalize.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/saved" component={SavedBooks} />
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
