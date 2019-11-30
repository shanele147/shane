import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './style.css';
import Hinh from './chair.jpg'; // dat ten cho element muon import. Neu tu mot folder ngoai: ../img/chair.jpg
import ProductInfo from './ProductInfo';
import ProductImage from './Image';

function App() {
  return (
    <div className="App">
      {/* <div className="img-container"> 
      <img src={Hinh}></img>
      </div>

      <div className="sale-bar">SALE</div>
      <div className="promotion-content">
        <h3>FURNITURE</h3>
        <p classNames="promotion-text">Minimal Decor Furniture</p>
        <p><span className="sale-price">$119.00 USD</span><span class="normal-price">$230.00 USD</span></p>
      </div> */}
      <ProductImage src={Hinh} saleText="SALE" />
      <ProductInfo name="FURNITURE" type="Minimal Deco Furniture" finalPrice="$119.00 USD" price="$230.00 USD" />
    </div >

  );
}

export default App;
