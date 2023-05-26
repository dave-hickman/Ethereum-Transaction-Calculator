import { useState } from "react";
import "./calculator.css";
import Speeds from "./Speeds";
import Chart from "./Chart";

const Calculator = ({ ethPrice, gasSpeeds, setGasSpeeds, historicPrices }) => {
  const [speed, setSpeed] = useState(Math.round(gasSpeeds.fast.feeCap));
  const [transaction, setTransaction] = useState("21000");
  const [result, setResult] = useState("");
  const [chosenSpeed, setChosenSpeed] = useState("fast")

  const handleSpeedChange = (event) => {
    event.preventDefault();
    setSpeed(event.currentTarget.value);
  };
  const handleTransactionChange = (event) => {
    setTransaction(event.target.value);
  };

  const calculateResult = (event) => {
    event.preventDefault();
    if (speed && transaction) {
      const calculatedResult =
        parseInt(speed) * parseInt(transaction) * (ethPrice / 10 ** 9);
      const twoDecimal = calculatedResult.toFixed(2);
      setResult(`$${twoDecimal}`);
    }
  };

  return (
    <>
      <section className="form-container">
        <form id="form">
          <div className="speed-option">
            <label htmlFor="option">Choose your speed:</label>
            <Speeds
              setGasSpeeds={setGasSpeeds}
              gasSpeeds={gasSpeeds}
              handleSpeedChange={handleSpeedChange}
              setSpeed={setSpeed}
              setChosenSpeed={setChosenSpeed}
            />
          </div>
          <div className="gasLimit">
            <label htmlFor="option">Select your transaction type:</label>
            <select
              name="option"
              id="number"
              value={transaction}
              onChange={handleTransactionChange}
            >
              <option value="21000">ETH: Transfer</option>
              <option value="46109">USDT: Transfer</option>
              <option value="48481">USDC: Transfer</option>
              <option value="71645">Opensea: Sale</option>
              <option value="129830">Uniswap V3: Swap</option>
              <option value="105657">Uniswap V2: Swap</option>
              <option value="109253">SushiSwap: Swap</option>
            </select>
          </div>
          <button type="submit" onClick={calculateResult}>
            Get your estimate
          </button>
        </form>
        <p id="result">{result}</p>
      </section>
      <Chart historicPrices={historicPrices} speed={speed} chosenSpeed={chosenSpeed}/>
    </>
  );
};

export default Calculator;
