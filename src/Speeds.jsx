import { useState, useEffect } from "react";
import { fetchSpeeds } from "../utils/apiGET";
import "./speeds.css"

const Speeds = ({gasSpeeds, setGasSpeeds}) => {
  const speeds = ["eco", "fast", "instant"]
  const speedRef= {eco: 'Slow', fast: 'Fast', instant: 'Instant'}
  

  return (
    <div className="speeds-container">
      {speeds.map((speed, index) => {
        return (
          <section className="speeds" key={index}>
            <h3>{`${speedRef[speed]} Gas Price:`}</h3>
            <h2 id={`${speedRef[speed]} Gas Price`}>{Math.round(gasSpeeds[speed].feeCap)}</h2>
            <h5>Gwei</h5>
          </section>
        );
      })}
    </div>
  );
};

export default Speeds;
