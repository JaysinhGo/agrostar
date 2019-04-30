import React from 'react';
import './../css/Product.css'
import AppButtons from './AppButtons'

const Product = (props)=>{
    console.log(props);
    let productData = props.productData;
    let imageStyle = {
        backgroundImage: 'url(' + productData.productImages[0].name + ')',
        WebkitTransition: 'all',
        msTransition: 'all'
    };
    return(
        <div className="col s6 m3 l3">
            <div className="card productCard">
                <div className="card-image" style={imageStyle}>
                </div>
                <div className="card-content card-content-box">
                    <p>{productData.productName}</p>
                </div>
                <div className="card-content">
                    <p><b>Rs. {productData.sellingPrice}</b></p>
                </div>
                <AppButtons />
            </div>
        </div>
    )
}

export default Product;