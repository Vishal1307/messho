import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signupData } from "../../Redux/auth/action"
import "./login.css"

export const SignUp=()=>{
    
    const [text,setText]=useState({
        name:"",
        email:"",
        number:"",
        password:""
    })
    const navigate=useNavigate()
    const [err,setErr]=useState(false)
    const [submit,setSubmit]=useState(false)
    const handleInput=(e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.name==""||text.email==""||text.password==""||text.number==""){
            setErr(true)
        }
        else{
            setErr(false)
            setSubmit(true)
            localStorage.setItem("signup",JSON.stringify(text))
            navigate("/login")

            
        }
    
    }
    const errorMessage=()=>{
        return (
            <div className="" style={{
                display:err?"":'none'

            }}>
                <p>Enter a valid data</p>


            </div>

        )
    }
    const successMessage=()=>{
        return (
            <div style={{
                display:submit?"":'none'


            }}>
                <p>{text.name},Your registration is succesfully</p>

            </div>
        )
    }
    
    return (
        <div>
            <h1>Create A Meesho Account</h1>
            {successMessage()}
            
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder="Name"  onChange={handleInput} />
                <input type="text" name="email" id="" placeholder="Email" onChange={handleInput} />
                <input type="text" name="number" id="" placeholder="Phone Number" onChange={handleInput} />
                <input type="text" name="password" id="" placeholder="Password" onChange={handleInput} />
                
                <input type="submit" value="Submit" />
                

            </form>
            {errorMessage()}
        </div>
    )
}