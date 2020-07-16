import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
