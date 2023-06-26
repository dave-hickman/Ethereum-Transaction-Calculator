# Gas Leak

## Overview

This app allows you to calculate the real-time cost of a transaction on the Ethereum network (gas fee), by choosing your desired speed and the type of transaction you would like to make. This app simplifies what can be a confusing process and provides a graph to indicate the most cost-effective time to make a transaction. It pulls live data of the Ethereum network from the [gasprice.io API](https://www.gasprice.io/docs/api)

Live Version:

[Gas Leak](https://gas-leak.vercel.app)

## Features

* The current live Ethereum dollar value is presented at the top of the page.
* Current gas price in Gwei is presenting in slow, fast and instant speeds. Select your choice of speed to continue.
* The type of transaction you would like to do can be selected from the dropdown.
* Submitting your choices will present you with the estimated cost (gas fee) for the transaction.
* Historic data from the past 24 hours for your selected gas speed is presented in chart format below.

## Running this project locally


To run this project locally, you will need to fork this repo or fork as follows:
```
git clone https://github.com/dave-hickman/ethereum-transaction-portfolio
cd portfolio
```
Once in the project directory, run the following command to install the required dependencies for the project and start the app:

```
npm install
npm run dev
```

## Dependencies

* React
* React-DOM
* React-Scripts
* React-Chartjs-2
* Chart.js
* Axios
* Vite
* ESLint