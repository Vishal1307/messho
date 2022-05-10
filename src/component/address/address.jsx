import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./address.css"
export const Address=()=>{
    const [text,setText]=useState({
        name:"",
        number:"",
        houseno:"",
        roadno:"",
        pincode:"",
        city:"",
        state:""

    })
    const handleChange=((e)=>{
        const {name}=e.target
        setText({...text,[name]:e.target.value})
        

    })
    const navigate=useNavigate()
    
   
    return (
        <div className="main">
            <h1><img src="./src\pic\172517_phone_icon.png" alt="" />Contact Details</h1>
            <form action="">
                <input type="text" name="name" id="" placeholder="Name" onChange={handleChange} />
                <input type="number" name="number" id="" placeholder="Phone number" onChange={handleChange}/>
                <h1><img src="https://pixsector.com/cache/2102b688/av924d89f198e4e084336.png" alt="" />Address</h1>
                <input type="text" name="houseno" id="" placeholder="House no./Building Name"onChange={handleChange} />
                <input type="text" name="roadno" id="" placeholder="Road Name/Area/colony"onChange={handleChange} />
                <input type="text" name="pincode" id="" placeholder="Pincode" onChange={handleChange}/>
                <input type="text" name="city" id="" placeholder="City" onChange={handleChange}/>
                <input type="text" name="state" id="" placeholder="State" onChange={handleChange}/>

            </form>
            <button className="btn" onClick={()=>{
                localStorage.setItem("address",JSON.stringify(text))
                navigate("/payment")
                

            }}>Save address & Continue</button>
        </div>
    )
}