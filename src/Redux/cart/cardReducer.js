import { ADD_CART, DISCOUNT_PRICE, NO_CART, TOTAL_PRICE } from "./actionType"

const init={
    cart:[],
    no:0,
    price:0,
    discount:0

}
export const CardReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_CART:
            return {...store,cart:[...store.cart,payload]}
        case NO_CART:
            return {...store,no:store.no+payload}
        case TOTAL_PRICE:
            
            return {...store,price:store.price+payload}
        case DISCOUNT_PRICE:
            return {...store,discount:store.discount+payload}
        default:
            return{...store}
    }

}