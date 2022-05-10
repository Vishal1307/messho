import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Navigate,useNavigate} from "react-router-dom"
import { discountPrice, noOfCart, totalPrice } from "../../Redux/cart/action"

export const Cart=()=>{
    const {cart,no,price,discount}=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    
    
   
    return (
        <div>
            <h1>Cart:{no}</h1>
            {cart.map((cv)=>{
                return (
                    <div key={cv.id}>
                        <p>{cv.title}</p>
                        <p>discounted-price{cv.discounted_price}</p>
                        <p>orginal-price{cv.original_price}</p>
                        <button onClick={()=>{
                            dispatch(noOfCart(-1))
                            dispatch(totalPrice(-cv.discounted_price))
                            dispatch(discountPrice(-cv.original_price))


                        }}>-</button>
                        <button onClick={()=>{
                            dispatch(noOfCart(1))
                            dispatch(totalPrice(cv.discounted_price))
                            dispatch(discountPrice(cv.original_price))

                            
                        

                        }}>+</button>
                        
                    </div>
                )

            })}
            <div>
                <div>
                    <h2>Price detail</h2>
                    <p>total price       ₹ {discount} </p>
                    <p>after discount    ₹{price}</p>
                    <p>Delivry Charges   +₹ 0</p>
                    <p>Cod Charges       +₹ 0</p>
                </div>


                <button onClick={()=>{
                    navigate("/address")
                }}>CheckOutPage</button>

            </div>
        </div>
    )
}