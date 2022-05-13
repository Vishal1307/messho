import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./product.css"
import {Link, useNavigate} from "react-router-dom"

export const WomenEastern=()=>{
    const [WomenEastern,setEastern]=useState([])
    // const navigate=useNavigate()
    const {data}=useSelector((store)=>store.data)
    // const {auth}=useSelector((store)=>store.auth)
    

    const data1=data.filter((cv)=>{
        return cv.category== "Sarees"
    })
    useEffect(()=>{
        setEastern(data1)

    },[])
    
    
    
    
    
    
    
   
    
    
    
    

    return (
        <div className="maindev">
           <div className="product">
                {
                    WomenEastern.map((cv)=>{
                        return <Link to={`/WomenEthnic/${cv.id}`} key={cv.id} >
                            <div className="product2">
                                <img src={cv.images} alt="" />
                                <h2>{cv.title}</h2>
                                <p>discounted_price:-₹{cv.discounted_price} && ₹{cv.original_price}</p>
                                
                            </div>
                        </Link>
                    })

                }
                
            </div>
            
        </div>
    )
}