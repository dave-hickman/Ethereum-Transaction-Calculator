import axios from "axios";


export function fetchSpeeds() {
  return axios
    .get(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${import.meta.env.VITE_ETHERSCAN_API_KEY}`
    )
    .then((response) => {
      return response.data.result;
    })
    .catch((error) => {
      console.error("An error occured:", error);
      // setErrorMessage("An error occured. Please try again later.");
    });
}

export function fetchEthPrice() {
    return axios.get(`https://api.coincap.io/v2/assets/ethereum`)
    .then((response) => {
        return parseFloat(response.data.data.priceUsd).toFixed(2)
    })
    .catch((error) => {
        console.error("An error occured:", error);
        // setErrorMessage("An error occured. Please try again later.");
      });
}
