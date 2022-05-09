import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Applince=()=>{
    const [applince,setApplince]=useState([])
    const {data}=useSelector((store)=>store.data)
    const data1=data.filter((cv)=>{
        return cv.category== "Home and Kitchen"
    })
    useEffect(()=>{
        setApplince(data1)

    },[])
    return (
        <div>
            <div className="product">
                {
                    applince.map((cv)=>{
                        return <Link to={`/Home/${cv.id}`} key={cv.id}>
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