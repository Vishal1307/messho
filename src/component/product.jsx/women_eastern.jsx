import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./product.css"
import {Link} from "react-router-dom"

export const WomenEastern=()=>{
    const [WomenEastern,setEastern]=useState([])
    const {data}=useSelector((store)=>store.data)
    const data1=data.filter((cv)=>{
        return cv.category== "Sarees"
    })
    useEffect(()=>{
        setEastern(data1)

    },[])
    
    
    
    
    
    
    
   
    
    
    
    

    return (
        <div>
           <div className="product">
                {
                    WomenEastern.map((cv)=>{
                        return <Link to={`/WomenEthnic/${cv.id}`} key={cv.id}>
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