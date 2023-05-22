import { useState } from "react";
import "./app.css";
import Header from "./Header";
import Speeds from "./Speeds";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <Header />
      <Calculator />
      <Speeds />
    </>
  );
}

export default App;

