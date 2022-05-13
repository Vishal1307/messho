import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams,useNavigate } from "react-router-dom"
import { addCart, discountPrice, noOfCart, totalPrice } from "../../Redux/cart/action"
import { Header } from "../header"
import "./product.css"

export const Show=()=>{
    const {userid}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    

    
    const [data2,setData]=useState([])
    const {auth}=useSelector((store)=>store.auth)
    
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
    
    
    
    
    

    return auth?(
        <div>
           

            <div className="idshow">
                <div className="showbutton">
                    
                        


                    <img src={data2.images} alt=""  />
                    

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
                <div className="showDetail">
                    <h2>Product Detail</h2>
                    <p>title:{data2.title}</p>
                    <p>category:{data2.category}</p>
                    <p>original_price:₹{data2.original_price}</p>
                    <p>discounted_price:{data2.discounted_price}</p>
                    <p>size:{data2.sizes}</p>
                    <p>rating:{data2.rating}</p>
                    <p>seller_id:{data2.seller_id}</p>


                </div>
            

            </div>
        </div>
    ):navigate("/login")
}