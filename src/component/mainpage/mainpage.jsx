import { pink } from "@mui/material/colors"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import "./mainpage.css"
export const MainPage=()=>{
    const navigate=useNavigate()
    const [main,setMain]=useState([])
    const {data}=useSelector((store)=>store.data)
    useEffect(()=>{
        setMain(data1)

    },[])
    const data1=data.filter((cv)=>{
        return cv.rating>4.5
    })
   

    
    return (
        <div className="main">
            <div className="p1">
                <img src="./src\pic\Screenshot 2022-05-11 152058.jpg" alt="" />
                <img src="./src\pic\p2.jpg" alt="" />


            </div>
            <div className="p2">
                <div onClick={()=>{
                    navigate("/WomenEthnic")
                }}>
                    <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
                    {/* <button>Women</button> */}

                </div>
                <div onClick={()=>{
                    navigate("/Men")
                }}>
                    <img src="./src\pic\men.webp" alt="" />
                    {/* <button>Men</button> */}

                </div>
                <div onClick={()=>{
                    navigate("/kids")
                }} >
                    <img src="./src\pic\kid.webp" alt="" />
                    {/* <button>Kid</button> */}

                </div>
                
            </div>
            <div className="p3">
                <div>
                    <h1>Essentials</h1>
                    <button>View All</button>
                </div>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1649760808952.webp" alt="" />
                    <button onClick={()=>{
                        navigate("/Beauty")
                    }}>Beauty</button>

                </div>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1649760703179.webp" alt="" />
                    <button onClick={()=>{
                        navigate("/Home")
                    }}>Home</button>

                </div>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1649760786763.webp" alt="" />
                    <button onClick={()=>{
                        navigate("/Men")

                    }}>Electronic</button>

                </div>


            </div>
            <div className="p4">
                <img src="./src\component\mainpage\Screenshot 2022-05-11 172120.jpg" alt="" />

            </div>
            <div className="p4">
                <img src="./src\component\mainpage\Screenshot 2022-05-11 172205.jpg" alt="" />
            </div>
            <div className="p5">
                {main.map((cv)=>{
                    return (
                        <Link to={`/${cv.id}`} className="p5data" key={cv.id}>
                            <img src={cv.images} alt="" />
                            <h2> ₹{cv.discounted_price} </h2>
                            <p> orginal-price₹{cv.original_price}</p>
                            <p>{cv.original_price-cv.discounted_price} discount on 1st order</p>
                            <h3 style={{
                            backgroundcolor:"pink",

                            }}>Free Delivary</h3>
                        </Link>
                    )
                })}
                

            </div>
        </div>
    )
}