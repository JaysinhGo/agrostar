import { ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY, APP_DATA_SUCCESS } from '../actions/action-types/cart-actions'

const initState = {  
    cartData: {},
    productList:[]
}

const rootReducer= (state = initState,action)=>{
    if(action.type === APP_DATA_SUCCESS){
        const newProductList = {
            ...state.productList
        };
        return{
            ...state,
            productList: newProductList
        }
    }
    if(action.type === ADD_TO_CART){
        alert();
        const newCartData = {
          ...state.cartData
        };
        return{
            ...state,
            cartData: newCartData
        }
    }
    if(action.type === ADD_QUANTITY){
        const newCartData = {
          ...state.cartData
        };
        return{
            ...state,
            cartData: newCartData
        }
    }
    if(action.type === SUB_QUANTITY){
        const newCartData = {
          ...state.cartData
        };
        return{
            ...state,
            cartData: newCartData
        }
    }
    return state
}

export default rootReducer