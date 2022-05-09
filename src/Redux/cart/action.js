import { ADD_CART, NO_CART } from "./actionType";

export const addCart=(payload)=>({
    type:ADD_CART,
    payload

})
export const noOfCart=(payload)=>({
    type:NO_CART,
    payload
})