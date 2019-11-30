import React from "react";

function ProductInfo(props) {
    return (
        <div>
            <div className="promotion-content"><h3>{props.name}</h3>
                <p classNames="promotion-text">{props.type}</p>
                <p><span className="sale-price">{props.finalPrice}</span><span className="normal-price">{props.price}</span></p>
            </div>
        </div>
    );
}
export default ProductInfo;