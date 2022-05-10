import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./product.css"
export const Payment=()=>{
    const {price}=useSelector((store)=>store.cart)
    const navigate=useNavigate()
    

    return (
        <div>
            <div>
                <button className="btnpayment"><img src="./src\pic\cash.png" alt="" />Cash on delivary</button>
                <button className="btnpayment">Reselling the Order</button>
            </div>
            <div>
                <p>Product Charges ₹{price}</p>
                <p>Delivary cahrge +₹0</p>
                <p>Cod Charges +₹0</p>
                <p>--------------------------------------------------------</p>
                <h1>Order Total {price}</h1>
                <button onClick={()=>{
                    navigate("/summary")


                }}>Continue</button>

            </div>
        </div>
    )
}