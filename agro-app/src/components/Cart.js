import React from 'react';
import { connect } from 'react-redux'
import './../css/Cart.css'

const Cart = (props)=>{
    let totalAmount = props.totalAmount + '';
    let productListValue = Object.values(props.cartData);
    let productCount = arr => arr.reduce((a,b) => a + b, 0)
    productCount = productCount(productListValue);
    return(
        <div className={"row cartBoxContainer scale-transition " + (productCount ? 'scale-in':'scale-out')}>
            <div className="col s0 m3 l3"></div>
            <div className="col s12 m6 l6">
                <div className="card cartBox">
                    <div className="row valign-wrapper">
                        <div className="col s6 m6 l6 left-align count valign-wrapper">
                            <span className="productCount"> {productCount} items</span>
                            <span className="pipe"></span>
                            <span className="amountCount">Rs. {totalAmount} </span>
                        </div>
                        <div className="col s6 m6 l6 valign-wrapper right-align viewBagArrow">
                            <span>VIEW BAG</span>
                            <i className="material-icons">chevron_right</i>
                        </div>
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
        productList: state.productList,
        totalAmount: state.totalAmount
    }
}

export default connect(mapStateToProps)(Cart)