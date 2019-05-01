import { ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY, APP_DATA_SUCCESS, APP_SESSION_DATA, UPDATE_AMOUNT, APP_SESSION_AMOUNT } from '../actions/action-types/cart-actions'

const initState = {  
    cartData: {},
    productList:[],
    totalAmount: 0
}

const rootReducer= (state = initState,action)=>{
    if(action.type === APP_DATA_SUCCESS){
        return {
            ...state,
            productList: action.data
        }
    }
    if(action.type === APP_SESSION_DATA){
        return {
            ...state,
            cartData: action.data
        }
    }
    if(action.type === APP_SESSION_AMOUNT){
        let amount = !isNaN(action) ? action : action.data;
        return {
            ...state,
            totalAmount: amount
        }
    }
    if(action.type === ADD_TO_CART){
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
    if(action.type === UPDATE_AMOUNT){
        return{
            ...state,
            totalAmount: action.data
        }
    }
    return state
}

export default rootReducer