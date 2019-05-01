import React from 'react';
import { connect } from 'react-redux'
import './../css/AppButtons.css'

const AppButtons = (props)=>{
    if(!props.cartData[props.productData.skuCode]){
        return(
            <div className="card-content btnBox">
                <a onClick={()=>{props.productData.eventhandler.addProduct(props.productData.skuCode)}} className="waves-effect waves-light btn btn-small">ADD</a>
            </div>
        )
    }else{
        return(
            <div className="card-content btnBox">
                <a onClick={()=>{props.productData.eventhandler.addProduct(props.productData.skuCode)}} className="waves-effect waves-light btn btn-small">+++</a>
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