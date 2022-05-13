import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate,Link,Navigate } from "react-router-dom"
import { addAuth } from "../../Redux/auth/action"
import "./login.css"

export const Login=()=>{
    const [text,setText]=useState({
        email:"",
        password:""
    })
    const [err,setErr]=useState(false)
    const [login,setLogin]=useState(false)
    const navigate=useNavigate()
    const data=JSON.parse(localStorage.getItem("signup"))
    const dispatch=useDispatch()
    
    const handleInput=(e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})

    }
    const handleSubmit=(e)=>{
       if(text.email==data.email && text.password==data.password){
           setLogin(true)
           setErr(false)
           dispatch(addAuth())
           navigate(-1)

           
       }
       else{
           setErr(true)
       }

    }
    const successMessage=()=>{
        return (
            <div className="" style={{
                display:login?"":'none' 

            }}>
                <p>{text.name},Login sucessfully </p>

            </div>
        )
    }
    const errorMessage=()=>{
        return (
            <div className="" style={{
                display:err?"":"none"

            }}>
                <p>Check the Email && Password </p>

            </div>
        )
    }
    return (
        <div className="login">
            {successMessage()}
            <h1>Login A Messho Account</h1>
            <input type="text" name="email" id="" placeholder="Email" onChange={handleInput} />
            <input type="text" name="password" id="" placeholder="Password" onChange={handleInput}/>
            <button onClick={handleSubmit}>LogIn</button>
            {errorMessage()}
            <div onClick={()=>{
                navigate("/signup")

            }}><h1>Create a account</h1></div>
        </div>
    )
}