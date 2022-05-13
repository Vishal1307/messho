import { ADD_AUTH, LOGIN_DATA, SIGNUP_DATA } from "./actionType"

const init={
    auth:false

}

export const authReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_AUTH:
            return {...store,auth:true}
        default:
            return {...store}

    }
}