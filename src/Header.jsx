const Header = () => {
    return (
      <nav>
        <header>
          <h1 className="title">GAS LEAK</h1>
          <h3 className="sub-title">Ethereum Transaction Calculator</h3>
          <h3 className="timer">Prices will update in 30 seconds</h3>
        </header>
        <div className="current-price">
          <h4 id="eth-price">ETH Price $29000</h4>
          <h4 class="currency active">USD</h4>
          <h4 class="currency active">GBP</h4>
          <h4 class="currency active">EUR</h4>
        </div>
      </nav>
    );
  };

  export default Header