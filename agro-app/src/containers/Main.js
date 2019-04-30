import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import SearchFilter from '../components/SearchFilter'

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {  
            "searchValue": "",
            "cartData":{},
            "productList":[  
               {  
                    "levelOneCategory":"Category",
                    "defaultOffer":null,
                    "skuCode":"AGS-CN-004",
                    "isEnabledForRequestedSource":true,
                    "productImages":[{
                        "type":"thumb",
                        "name":"https://s3.ap-south-1.amazonaws.com/agrostarcatalog/static/AGS-CN-004_l.jpg"
                    }],
                    "sellingPrice":450,
                    "mrp":550,
                    "productName":"Power Gel - Plant Nutrient (500 Ml)"
                },{  
                    "levelOneCategory":"Category",
                    "defaultOffer":null,
                    "skuCode":"AGS-CN-030",
                    "isEnabledForRequestedSource":true,
                    "productImages":[{  
                        "type":"thumb",
                        "name":"https://s3.ap-south-1.amazonaws.com/agrostarcatalog/static/AGS-CN-030_l.jpg"
                     }],
                    "sellingPrice":400,
                     "mrp":460,
                    "productName":"Super Sona (250 Gms)"
                },{  
                    "levelOneCategory":"Category",
                    "defaultOffer":null,
                    "skuCode":"AGS-CN-031",
                    "isEnabledForRequestedSource":true,
                    "productImages":[{  
                        "type":"thumb",
                        "name":"https://s3.ap-south-1.amazonaws.com/agrostarcatalog/static/AGS-CN-031_l.jpg"
                    }],
                    "sellingPrice":400,
                    "mrp":550,
                    "productName":"BT special Advance powder (500 Gms)"
                },{  
                    "levelOneCategory":"Category",
                    "defaultOffer":null,
                    "skuCode":"AGS-CN-035",
                    "isEnabledForRequestedSource":true,
                    "productImages":[{  
                        "type":"thumb",
                        "name":"https://s3.ap-south-1.amazonaws.com/agrostarcatalog/static/AGS-CN-035_l.jpg"
                    }],
                    "sellingPrice":380,
                    "mrp":450,
                    "productName":"Humic power Advanced powder 95% (250 Gms)"
                },{  
                    "levelOneCategory":"Category",
                    "defaultOffer":"Buy 2 get 1",
                    "skuCode":"AGS-HW-099",
                    "isEnabledForRequestedSource":true,
                    "productImages":[{  
                        "type":"thumb",
                        "name":"https://s3.ap-south-1.amazonaws.com/agrostarcatalog/static/AGS-HW-099_l.jpg"
                    }],
                    "sellingPrice":5450,
                    "mrp":0,
                    "productName":"KK Sprayer - 708(AL1) - 2 Stroke (Petrol)"
                }
            ]
        }
    }

    handleFilter = (e) => {
        this.setState({searchValue : e.target.value });
    }

    eventhandler = () => {
        return {
            addProduct = (ID) => {

            },
            deleteProduct = (ID) => {

            },
            increaseQuantity = (ID) => {

            },
            decreaseQuantity = (ID) => {

            }
        }
    }

    render(){
        let filterProducts = this.state.productList.filter((product) => {
            return product.productName.toLowerCase().includes(this.state.searchValue.toLowerCase())
        })
        return(
            <div className="row cart">
                <div className="col s12 m12 l12 center-align">   
                    <SearchFilter handleFilter={this.handleFilter} />
                </div>
                <div className="col s12 m12 l12 center-align">
                    <ProductList filterProducts={filterProducts} eventhandler={this.eventhandler} cartData={this.state.cartData} />
                </div>
            </div>
        )
    }
}

export default Main;