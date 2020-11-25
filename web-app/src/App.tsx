import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import NavBar from "./pages/landing-page/components/NavBar";
import Navigation from "./pages/landing-page/Navigation";
import Dashboard from "./pages/landing-page/Navigation";
import Todo from "./pages/todos-dashboard/components/Todo";
import TodosBoard from "./pages/todos-dashboard/TodosBoard";

export function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/contact" component={Contact} />
        <Route path="/todos" component={TodosBoard} />
      </div>
    </Router>
  );
}

export default App;
