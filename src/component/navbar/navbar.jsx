import { Link, Routes ,Route} from "react-router-dom"
import { Cart } from "../cart/cart"
import { Login } from "../login/login"
import { Profile } from "../login/profile"
import { SignUp } from "../login/signup"
import "./navbar.css"
export const Logo=()=>{
    return (
        <div className="navbar">
            <Link to="/"><img src="https://seosandwitch.com/wp-content/uploads/2021/07/How-To-Sell-On-Meesho.jpg" alt="" />
            </Link>
            <input type="text" name="" id="" />
            <Link to="/cart">Cart</Link>
            <Link to="/profile">Profile</Link>
            

            
        </div>
    )
}