import { ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions'

const initState = {  
    cartData: {},
    productList:[  
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

const cartReducer= (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
        const newCartData = {
          ...state.cartData
        };
        //newCartData[action.id] = 1;
        console.log('new cart data', newCartData);
        return{
            ...state,
            cartData: newCartData
        }
    }
    if(action.type === ADD_QUANTITY){
        const newCartData = {
          ...state.cartData
        };
        //newCartData[action.id] = 1;
        console.log('new cart data', newCartData);
        return{
            ...state,
            cartData: newCartData
        }
    }
    if(action.type === SUB_QUANTITY){
        const newCartData = {
          ...state.cartData
        };
        //newCartData[action.id] = 1;
        console.log('new cart data', newCartData);
        return{
            ...state,
            cartData: newCartData
        }
    }
    return state
}

export default cartReducer