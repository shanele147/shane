import React from "react";
// import './style.css';


function ProductImage(props) {
  return (
    <div>
      <div className="img-container">
        <img src={props.src} />
      </div>
      <div className="sale-bar">{props.saleText}</div>

    </div>
  );
}
export default ProductImage;