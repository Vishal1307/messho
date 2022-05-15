import { ADD_DATA, ADD_DATA_LOADING, ADD_DATA_SUCESS, GET_DATA_ERROR, GET_INPUT_DATA } from "./actionType";

export const addData=(payload)=>({
    type:ADD_DATA,
    payload
})
export const addDataLoding=(payload)=>({
    type:ADD_DATA_LOADING,
    payload
})
export const addDataSucess=(payload)=>({
    type:ADD_DATA_SUCESS,
    payload
})
export const getData_error=(payload)=>({
    type:GET_DATA_ERROR,
    payload
})
export const inputData=(payload)=>({
    type:GET_INPUT_DATA,
    payload

})