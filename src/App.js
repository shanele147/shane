import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <p>Hello ReactJS !</p>
      <br></br>
      <div className="img-container"> 
      <img src='img/chair.jpg'></img>
      </div>

      <div className="sale-bar">SALE</div>
      <div className="promotion-content">
        <h3>FURNITURE</h3>
        <p classNames="promotion-text">Minimal Decor Furniture</p>
        <p><span className="sale-price">$119.00 USD</span><span class="normal-price">$230.00 USD</span></p>
      </div>
    </div>

  );
}

export default App;
