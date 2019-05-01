import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import SearchFilter from '../components/SearchFilter'
import { addToCart } from '../actions/cartActions'

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            "searchValue": ""
        }
    }
    eventhandler = {
        addProduct : (ID) => {
            this.props.cartData[ID]=1;
            this.props.addToCart(this.props.cartData);
        },
        increaseQuantity : (ID) => {

        },
        decreaseQuantity : (ID) => {

        }
    };
    
    handleFilter = (e) => {
        this.setState({searchValue : e.target.value });
    }

    render(){
        let filterProducts = this.props.productList.filter((product) => {
            return product.productName.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })
        return(
            <div className="row cart">
                <div className="col s12 m12 l12 center-align">   
                    <SearchFilter handleFilter={this.handleFilter} />
                </div>
                <div className="col s12 m12 l12 center-align">
                    <ProductList filterProducts={filterProducts} eventhandler={this.eventhandler} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        cartData: state.cartData,
        productList: state.productList
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (data)=>{dispatch(addToCart(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)