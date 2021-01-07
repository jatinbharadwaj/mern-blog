import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts" component={PostList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
