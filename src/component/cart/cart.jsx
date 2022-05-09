import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Navigate,useNavigate} from "react-router-dom"

export const Cart=()=>{
    const {cart,noCart}=useSelector((store)=>store.cart)
    const navigate=useNavigate()
    console.log(cart)
   
    return (
        <div>
            <h1>Cart:{noCart}</h1>
            {cart.map((cv)=>{
                return (
                    <div key={cv.id}>
                        <p>{cv.title}</p>
                        <p>{cv.original_price}</p>
                        <button onClick={()=>{
                            navigate("/payment")
                        }}>CheckOutPage</button>
                    </div>
                )

            })}

        </div>
    )
}