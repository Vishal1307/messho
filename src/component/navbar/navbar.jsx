import { debounce } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, Routes ,Route} from "react-router-dom"
import { inputData } from "../../Redux/product/action"
import { Cart } from "../cart/cart"
import { Login } from "../login/login"
import { Profile } from "../login/profile"
import { SignUp } from "../login/signup"
import { InputItem } from "../product.jsx/inputItem"
import "./navbar.css"
export const Logo=()=>{
    const inputRef=useRef()
    const [text,setText]=useState([])
    const timeOut=useRef()
    const handleChnage=()=>{
        clearTimeout(timeOut.current)
        if(!inputRef.current.value){
            setText([])
            return
        }
        timeOut.current= setTimeout(()=>{ fetch(`http://localhost:3002/products?q=${inputRef.current.value}`).then(async (response)=>{
                if(!response.ok){
                    console.log("something went wrong")
                }
                else{
                    const data=await response.json()
                    setText(data)

                }

            }).catch((err)=>{
                console.log("err")
            })
        },3000)
        
      
        

        
        
    }
   console.log(text)
   const dispatch=useDispatch()
   dispatch(inputData(text))
    
   
    
    
    return (
        <div className="navbar">
            <Link to="/"><img src="https://seosandwitch.com/wp-content/uploads/2021/07/How-To-Sell-On-Meesho.jpg" alt="image is loading" />
            </Link>
            <Link to="serchItem"><input type="text" name="serch" id="" ref={inputRef} onInput={handleChnage} placeholder="Serch Item" />
            </Link>
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            
            

            
        </div>
    )
}