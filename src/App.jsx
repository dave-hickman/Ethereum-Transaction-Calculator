import { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header";
import Calculator from "./Calculator";
import { fetchEthPrice, fetchSpeeds, fetchGasData } from "../utils/apiGET";


function App() {
  const [gasSpeeds, setGasSpeeds] = useState({});
  const [ethPrice, setEthPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [historicPrices, setHistoricPrices] = useState([])

  useEffect(() => {
    Promise.all([fetchSpeeds(), fetchEthPrice(), fetchGasData()])
      .then(([speeds, price, historic]) => {
        setGasSpeeds(speeds);
        setEthPrice(price);
        setHistoricPrices(historic)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  }, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header ethPrice={ethPrice} />
      <div className="calc-container">
      <Calculator ethPrice={ethPrice} gasSpeeds={gasSpeeds} setGasSpeeds={setGasSpeeds} historicPrices={historicPrices} />
      </div>
    </>
  );
}

export default App;
