import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Navigation from "./pages/landing-page/Navigation";
import ContentsDashBoard from "./pages/contents-dashboard/ContentsDashBoard";

export function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/contact" component={Contact} />
        <Route path="/content" component={ContentsDashBoard} />
      </div>
    </Router>
  );
}

export default App;
