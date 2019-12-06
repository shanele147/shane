import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './style.css';
// import './style.scss';
// import Hinh from './chair.jpg'; // dat ten cho element muon import. Neu tu mot folder ngoai: ../img/chair.jpg
import ProductInfo from './ProductInfo';
import ProductImage from './Image';
import dataJson from './data.json';


// console.log(dataJson);
function App() {
  // const productList = dataJson.data; //khai bao 1 mang chua cac san pham lay du lieu tu file dataJson
  // console.log(productList);
  return (
    <div className="App">
      <p>Hello Shane !</p>
      {/* {productList.map(elm => (
        <div className="product-item">
          <p>ID: {elm.product_id}</p>
          <ProductImage src={elm.img_url} saleText="SALE" />
          <ProductInfo name={elm.name} type={elm.product_type} finalPrice={elm.final_price} price={elm.price} /> */}
    {/* </div>
    ))} */}
  {/* <div className="img-container"> 
      <img src={Hinh}></img>
      </div>

      <div className="sale-bar">SALE</div>
      <div className="promotion-content">
        <h3>FURNITURE</h3>
        <p classNames="promotion-text">Minimal Decor Furniture</p>
        <p><span className="sale-price">$119.00 USD</span><span class="normal-price">$230.00 USD</span></p>
      </div> */}
  {/* <ProductImage src={Hinh} saleText="SALE" />
      <ProductInfo name="FURNITURE" type="Minimal Deco Furniture" finalPrice="$119.00 USD" price="$230.00 USD" /> */}
    </div >
  );
}

export default App;
