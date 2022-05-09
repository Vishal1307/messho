import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Kid=()=>{
    const [kid,setKid]=useState([])
    const {data}=useSelector((store)=>store.data)
    const data1=data.filter((cv)=>{
        return cv.category== "kid"
    })
    useEffect(()=>{
        setKid(data1)

    },[])


    
    return (
        <div>
            <div className="product">
                {
                    kid.map((cv)=>{
                        return <Link to={`/kids/${cv.id}`} key={cv.id}>
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