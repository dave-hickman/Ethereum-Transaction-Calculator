const Header = () => {
  return (
    <nav>
      <header>
        <h1 className="title">GAS LEAK</h1>
        <h3 className="sub-title">Ethereum Transaction Calculator</h3>
        <h3 className="timer">Prices will update in 30 seconds</h3>
      </header>
      <div className="current-price">
        <h4 id="eth-price">ETH Price: $29000</h4>
        <div className="currency-container">
          <h4 className="currency active">USD</h4>
          <h4 className="currency">GBP</h4>
          <h4 className="currency">EUR</h4>
        </div>
      </div>
    </nav>
  );
};

export default Header;
