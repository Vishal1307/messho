import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route } from "react-router-dom"
import { addData, addDataLoding, addDataSucess } from "../Redux/product/action"
import { Rout } from "./Rout"

export const Header=()=>{
    const [page,sePage]=useState(1)
    const {data,loding,error}=useSelector((store)=>store.data)
   
    const dispatch=useDispatch()
    useEffect(()=>{
        let d=getData()
        d()

    },[page])
    
    const getData=()=>{
        return async ()=>{
            dispatch(addDataLoding())
            let res= await fetch("https://json-tacker.herokuapp.com/products")
            let data=await res.json()
            dispatch(addDataSucess())
            dispatch(addData(data))

        }
    }
    
    return loding?"loading....": (
        <div>
           
            <Rout/>
            {/* <button onClick={()=>{
               sePage((p)=>{
                   if(p==0){
                       return 1
                   }
                   return p-1
               })
            }}>Prev</button> */}
            {/* <button onClick={()=>{
                sePage((p)=>p+1)
            }}>Next</button> */}

        </div>
    )
}