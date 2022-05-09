import { ADD_CART, NO_CART } from "./actionType"

const init={
    cart:[],
    noCart:0
}
export const CardReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_CART:
            return {...store,cart:[payload]}
        case NO_CART:
            return {...store,noCart:payload}
        default:
            return{...store}
    }

}