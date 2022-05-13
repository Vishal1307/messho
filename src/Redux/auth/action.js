import { ADD_AUTH, LOGIN_DATA, SIGNUP_DATA } from "./actionType";

export const signupData=(payload)=>({
    type:SIGNUP_DATA,
    payload

})
export const loginData=(payload)=>({
    type:LOGIN_DATA,
    payload
})
export const addAuth=()=>({
    type:ADD_AUTH
})