import { useState, useEffect } from "react";
import { fetchSpeeds } from "../utils/apiGET";
import "./speeds.css"

const Speeds = ({gasSpeeds, setGasSpeeds, handleSpeedChange, setSpeed}) => {
  const speeds = ["eco", "fast", "instant"]
  const speedRef= {eco: 'Slow', fast: 'Fast', instant: 'Instant'}
  const [selectedSpeed, setSelectedSpeed] = useState(speeds[1]);

  const handleButtonClick = (event, speed) => {
    event.preventDefault();
    setSelectedSpeed(speed);
    handleSpeedChange(event);
  }

  return (
    <div className="speeds-container">
      {speeds.map((speed, index) => {
        const buttonClassName = selectedSpeed === speed ? 'speeds selected' : 'speeds';
        return (
          <button onClick={(event) => handleButtonClick(event, speed)} className={buttonClassName} key={index} value={Math.round(gasSpeeds[speed].feeCap)}>
            <h2>{`${speedRef[speed]}`}</h2>
            <h3 id={`${speedRef[speed]} Gas Price`}>{Math.round(gasSpeeds[speed].feeCap)}</h3>
            <h4>Gwei</h4>
          </button>
        );
      })}
    </div>
  );
};

export default Speeds;
