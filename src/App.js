import React from "react";
import Home from "./components/Home";
import "../src/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  document.body.style.backgroundColor = "black";
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
