import { useState } from "react";
import "./Speeds.css";
const Speeds = () => {
  const speeds = ["Low", "Average", "High"];
  return speeds.map((speed) => {
    return (
      <section className="speed-container">
        <h3>{`${speed} Gas Price`}</h3>
        <h2 id={`${speed} Gas Price`}>42</h2>
        <h5>Gwei</h5>
      </section>
    );
  });
};

export default Speeds;
