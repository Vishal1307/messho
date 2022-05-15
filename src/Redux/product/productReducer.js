import { ADD_DATA, ADD_DATA_LOADING, ADD_DATA_SUCESS, GET_DATA_ERROR, GET_INPUT_DATA } from "./actionType"

const init={
    data:[],
    loding:false,
    error:false,
    inp:[]

}
export const productReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_DATA:
            return {...store,data:payload}
        case ADD_DATA_LOADING:
            return {...store,loding:true}
        case ADD_DATA_SUCESS:
            return {...store,loding:false}
        case GET_DATA_ERROR:
            return {...store,error:true}
        case GET_INPUT_DATA:
            return {...store,inp:payload}
        default:
            return {...store}
        

    }
}