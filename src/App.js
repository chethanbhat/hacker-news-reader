import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="container main">
        <h1 className="text-center text-dark mb-3">React Hackernews Reader</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:page">
            <Home />
          </Route>
          <Route path="/story/:id">
            <Details />
          </Route>
        </Switch>
      </div>
      <div className="footer bg-dark py-2 px-1">
        <p className="text-light text-center">
          Coded with
          <span role="img" aria-label="love">
            ❤️
          </span>
          by
          <a className="text-warning ml-1" href="https://chethanbhat.com">
            Chethan Bhat
          </a>
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
