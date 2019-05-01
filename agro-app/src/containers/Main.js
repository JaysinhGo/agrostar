import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import ProductList from '../components/ProductList'
import SearchFilter from '../components/SearchFilter'
import Cart from '../components/Cart'
import {addToCart, addQuantity,  subtractQuantity, appDataSuccess, appSessionData, updateAmount, appSessionAmount} from '../actions/cartActions'

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            "searchValue": "",
            "show":false
        }
    }

    componentWillMount =()=> {
        axios.get('http://www.mocky.io/v2/5b3de5ed310000db1f6de257').then(res => {
            this.props.appDataSuccess(res.data.responseData.productList);
            if(JSON.parse(window.sessionStorage.getItem("cartData"))){
                this.props.appSessionData(JSON.parse(window.sessionStorage.getItem("cartData")));
                this.props.appSessionAmount(JSON.parse(window.sessionStorage.getItem("totalAmount")));
            }else{
                this.props.appSessionData({});
                this.props.appSessionAmount(0);
            }
            this.setState({
                 show:true,
            });
        }).catch(err => {
          
        });
        window.addEventListener('beforeunload', this.sessionDataStore);
    }
    
    sessionDataStore = () => {
        window.sessionStorage.setItem("cartData", JSON.stringify(this.props.cartData));
        window.sessionStorage.setItem("totalAmount", this.props.totalAmount);   
    }

    eventhandler = {
        addProduct : (data) => {
            let amount = !isNaN(this.props.totalAmount) ? this.props.totalAmount :this.props.totalAmount.data;
            this.props.cartData[data.productData.skuCode]=1;
            let totalAmount = amount + data.productData.sellingPrice;
            this.props.addToCart(this.props.cartData);
            this.props.updateAmount(totalAmount);
            this.sessionDataStore();
        },
        increaseQuantity : (data) => {
            this.props.cartData[data.productData.skuCode]++;
            let amount = !isNaN(this.props.totalAmount) ? this.props.totalAmount :this.props.totalAmount.data;
            let totalAmount = amount + data.productData.sellingPrice;
            this.props.addQuantity(this.props.cartData);
            this.props.updateAmount(totalAmount);
            this.sessionDataStore();
        },
        decreaseQuantity : (data) => {
            let ID = data.productData.skuCode;
            this.props.cartData[ID]--;
            let amount = !isNaN(this.props.totalAmount) ? this.props.totalAmount :this.props.totalAmount.data;
            let totalAmount = amount - data.productData.sellingPrice;
            if(!this.props.cartData[ID]){
                delete this.props.cartData[ID];
            }
            this.props.subtractQuantity(this.props.cartData);
            this.props.updateAmount(totalAmount);
            this.sessionDataStore();
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
            <div className={"row cart " + (this.state.show ? 'show':'hide')}>
                <div className="col s12 m12 l12 center-align">   
                    <SearchFilter handleFilter={this.handleFilter} />
                </div>
                <div className="col s12 m12 l12 center-align product-body">
                    <ProductList filterProducts={filterProducts} eventhandler={this.eventhandler} />
                </div>
                <Cart />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        cartData: state.cartData,
        productList: state.productList,
        totalAmount: state.totalAmount
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (data)=>{dispatch(addToCart(data))},
        addQuantity: (data)=>{dispatch(addQuantity(data))},
        subtractQuantity: (data)=>{dispatch(subtractQuantity(data))},
        appSessionData : (data)=>{dispatch(appSessionData(data))},
        appSessionAmount : (data)=>{dispatch(appSessionAmount(data))},
        appDataSuccess : (data)=>{dispatch(appDataSuccess(data))},
        updateAmount : (data) => {dispatch(updateAmount(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)