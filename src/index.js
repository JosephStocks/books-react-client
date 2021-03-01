import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import ReadBooks from "./ReadBooks";
import WantToReadBooks from "./WantToReadBooks";
import BaseLayout from "./layout/BaseLayout";
// import "./modern-normalize.min.css";
// import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
import "./app.scss";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/readbooks" component={ReadBooks} />
            <Route path="/wanttoread" component={WantToReadBooks} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
