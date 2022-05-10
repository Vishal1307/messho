import { ADD_CART, DISCOUNT_PRICE, NO_CART, TOTAL_PRICE } from "./actionType";

export const addCart=(payload)=>({
    type:ADD_CART,
    payload

})
export const noOfCart=(payload)=>({
    type:NO_CART,
    payload
})
export const totalPrice=(payload)=>({
    type:TOTAL_PRICE,
    payload
})
export const discountPrice=(payload)=>({
    type:DISCOUNT_PRICE,
    payload
})