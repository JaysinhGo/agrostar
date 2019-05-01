import React from 'react';
import { connect } from 'react-redux'
import './../css/AppButtons.css'

const AppButtons = (props)=>{
    let productData = props.productData;
    let updateButton = props.cartData[productData.skuCode];

    if(!updateButton){
        return(
            <div className="card-content btnBox">
                <a onClick={()=>{productData.eventhandler.addProduct(props)}} className="waves-effect waves-light btn btn-small">ADD</a>
            </div>
        )
    }else{
        return(
            <div className="card-content btnBox">
                <a className="waves-effect waves-light btn btn-small">
                    <span className="dec" onClick={()=>{productData.eventhandler.decreaseQuantity(props)}} >-</span>
                    <label>{updateButton}</label>
                    <span className="inc" onClick={()=>{productData.eventhandler.increaseQuantity(props)}}>+</span>
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        cartData: state.cartData
    }
}

export default connect(mapStateToProps)(AppButtons)