import { useState } from "react";

const Speeds = () => {
  const speeds = ["Low", "Average", "High"];

  return (
    <div className="speeds-container">
      {speeds.map((speed, index) => {
        return (
          <section className="speeds" key={index}>
            <h3>{`${speed} Gas Price:`}</h3>
            <h2 id={`${speed} Gas Price`}>42</h2>
            <h5>Gwei</h5>
          </section>
        );
      })}
    </div>
  );
};

export default Speeds;
