import { useState } from "react";
import "./calculator.css"

const Calculator = () => {
  const [speed, setSpeed] = useState("23");
  const [transaction, setTransaction] = useState("210000");
  const [result, setResult] = useState("");

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };
  const handleTransactionChange = (event) => {
    setTransaction(event.target.value);
  };

  const calculateResult = (event) => {
    event.preventDefault();
    if(speed && transaction){
    const calculatedResult = (parseInt(speed) * parseInt(transaction)) / 100000;
    const twoDecimal = calculatedResult.toFixed(2);
    setResult(`$${twoDecimal}`);
    }
  };

  return (
    <section className="form-container">
      <form id="form">
        <div className="speed-option">
          <label htmlFor="option">Choose your speed:</label>
          <select
            name="option"
            id="option"
            value={speed}
            onChange={handleSpeedChange}
          >
            <option value="23">Low</option>
            <option value="28">Average</option>
            <option value="42">High</option>
          </select>
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
  );
};

export default Calculator;
