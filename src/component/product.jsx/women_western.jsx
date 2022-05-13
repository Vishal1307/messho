import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// import Pagination from '@material-ui/lab/Pagination';
// import { createSvgIcon } from "@mui/material";
// import { useControlled } from "@mui/material";
import "./product.css"

export const WomenWestern=()=>{
    const [wester,setWestern]=useState([])
    const {data}=useSelector((store)=>store.data)
    // const {auth}=useSelector((store)=>store.auth)
    // const navigate=useNavigate()
    const data1=data.filter((cv)=>{
        return cv.category== "Dresses"
    })
    useEffect(()=>{
        setWestern(data1)

    },[])
    

    
   

    return (
        <div>
            <div className="product">
                {
                    wester.map((cv)=>{
                        return <Link to={`/WomenWestern/${cv.id}`} key={cv.id}>
                            <div className="product2">
                                <img src={cv.images} alt="" />
                                <h2>{cv.title}</h2>
                                <p>discounted_price:-₹{cv.discounted_price} && ₹{cv.original_price}</p>
                                
                            </div>
                        </Link>
                    })

                }
                
            </div>
            {/* <Pagination count={10}/> */}
        </div>
    )
}