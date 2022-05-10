import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams,useNavigate } from "react-router-dom"
import { addCart, discountPrice, noOfCart, totalPrice } from "../../Redux/cart/action"
import { Header } from "../header"
import "./product.css"

export const Show=()=>{
    const {userid}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    

    
    const [data2,setData]=useState([])
    useEffect(()=>{
        const d=getData()
        d()

    },[])
    
    const getData=()=>{
        return async ()=>{
            const res=await fetch(` http://localhost:3002/products/${userid}`)
            const data1=await res.json()
            setData(data1)
        }
    }
    
    
    

    return (
        <div>
           

            <div className="idshow">
                <div>
                    
                        


                    {/* <img src={data2.images[0]} alt=""  /> */}
                    <button onClick={()=>{
                        
                        dispatch(noOfCart(1))
                        dispatch(addCart(data2))
                        dispatch(totalPrice(data2.discounted_price))
                        dispatch(discountPrice(data2.original_price))
                        
                    }}>ADDTOCART</button>
                    <button onClick={()=>{
                        navigate("/cart")


                    }}>GOTOCART</button>
                    {/* <p>{data2.images.length} similar Product</p> */}
                

                        

                        
                    
                
                </div>
                <div>
                    <h2>Product Detail</h2>
                    <p>Name:{data2.title}</p>
                    <p>category:{data2.category}</p>
                    <p>original_price:₹{data2.original_price}</p>
                    <p>iscounted_price:{data2.iscounted_price}</p>
                    <p>size:{data2.sizes}</p>


                </div>
            

            </div>
        </div>
    )
}