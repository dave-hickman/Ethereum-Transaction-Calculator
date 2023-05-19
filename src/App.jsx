import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Speeds from "./Speeds";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <Header />
      <Speeds />
      <Calculator />
    </>
  );
}

export default App;

