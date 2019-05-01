
import { ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY,APP_DATA_SUCCESS} from './action-types/cart-actions'

export const appDataSuccess= (id)=>{
    return{
        type: APP_DATA_SUCCESS,
        id
    }
}

export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
