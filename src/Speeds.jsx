import { useState } from "react";
import "./speeds.css"

const Speeds = ({gasSpeeds, setGasSpeeds, handleSpeedChange, setSpeed, setChosenSpeed}) => {
  const speeds = ["SafeGasPrice", "ProposeGasPrice", "FastGasPrice"]
  const speedRef= {SafeGasPrice: 'Eco', ProposeGasPrice: 'Fast', FastGasPrice: 'Instant'}
  const [selectedSpeed, setSelectedSpeed] = useState(speeds[1]);

  const handleButtonClick = (event, speed) => {
    event.preventDefault();
    setSelectedSpeed(speed);
    handleSpeedChange(event)
    setChosenSpeed(speed);
  }

  return (
    <div className="speeds-container">
      {speeds.map((speed, index) => {
        const buttonClassName = selectedSpeed === speed ? 'speeds selected' : 'speeds';
        return (
          <button onClick={(event) => handleButtonClick(event, speed)} className={buttonClassName} key={index} value={Math.round(gasSpeeds[speed])}>
            <h2>{`${speedRef[speed]}`}</h2>
            <h3 id={`${speedRef[speed]} Gas Price`}>{Math.round(gasSpeeds[speed])}</h3>
            <h4>Gwei</h4>
          </button>
        );
      })}
    </div>
  );
};

export default Speeds;
