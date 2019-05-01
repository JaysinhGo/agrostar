import React from 'react';
import { connect } from 'react-redux'
import './../css/Cart.css'

const Cart = (props)=>{
    console.log(props);
    let productList = Object.values(props.cartData);
    let productCount = 0;
    if (productList.length){
        productCount = productList.filter((product) => {
            return (productCount + product);
        })
    }
    return(
        <div className={"row cartBoxContainer scale-transition " + (productCount ? 'scale-in':'scale-out')}>
            <div className="col s0 m3 l3"></div>
            <div className="col s12 m6 l6">
                <div className="card cartBox">
                    <div className="row valign-wrapper">
                        <div className="col s6 m6 l6 left-align count valign-wrapper">
                            <span className="productCount"> {productCount} items</span>
                            <span className="pipe"></span>
                            <span className="amountCount">Rs. 500</span>
                        </div>
                        <div className="col s6 m6 l6 valign-wrapper right-align"></div>
                    </div>
                </div>
            </div>
            <div className="col s0 m3 l3"></div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        cartData: state.cartData,
        productList: state.productList
    }
}

export default connect(mapStateToProps)(Cart)