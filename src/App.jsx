import { useState, useEffect } from "react";
import "./index.css";
import Header from "./Header";
import Calculator from "./Calculator";
import { fetchEthPrice, fetchSpeeds} from "../utils/apiGET";


function App() {
  const [gasSpeeds, setGasSpeeds] = useState({});
  const [ethPrice, setEthPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchSpeeds(), fetchEthPrice()])
      .then(([speeds, price]) => {
        setGasSpeeds(speeds);
        setEthPrice(price);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header ethPrice={ethPrice} />
      <div className="calc-container">
      <Calculator ethPrice={ethPrice} gasSpeeds={gasSpeeds} setGasSpeeds={setGasSpeeds} />
      </div>
    </>
  );
}

export default App;
