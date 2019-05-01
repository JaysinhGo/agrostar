
import { ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY,APP_DATA_SUCCESS,APP_SESSION_DATA,UPDATE_AMOUNT,APP_SESSION_AMOUNT } from './action-types/cart-actions'

export const appDataSuccess= (data)=>{
    return{
        type: APP_DATA_SUCCESS,
        data
    }
}

export const appSessionData= (data)=>{
    return{
        type: APP_SESSION_DATA,
        data
    }
}

export const appSessionAmount= (data)=>{
    return{
        type: APP_SESSION_AMOUNT,
        data
    }
}

export const addToCart= (data)=>{
    return{
        type: ADD_TO_CART,
        data
    }
}

export const addQuantity=(data)=>{
    return{
        type: ADD_QUANTITY,
        data
    }
}

export const subtractQuantity=(data)=>{
    return{
        type: SUB_QUANTITY,
        data
    }
}

export const updateAmount=(data)=>{
    return{
        type: UPDATE_AMOUNT,
        data
    }
}
