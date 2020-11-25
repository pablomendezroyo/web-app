import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Navigation from "./pages/landing-page/Navigation";
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
