import { Link,Routes,Route } from "react-router-dom"
import { Cart } from "./cart/cart"
import { Bag } from "./product.jsx/bag"
import { Beauty } from "./product.jsx/beauty"
import { Applince } from "./product.jsx/homeApplince"
import { Jewellary } from "./product.jsx/jewellary"
import { Kid } from "./product.jsx/kid"
import { Men } from "./product.jsx/men"
import { Show } from "./product.jsx/show"
import { WomenEastern } from "./product.jsx/women_eastern"
import { WomenWestern } from "./product.jsx/women_western"
import "./product.jsx/product.css"
import { Payment } from "./product.jsx/payment"
export const Rout=()=>{
    return (
        <div>
            <div>


                <Link to="/WomenEthnic">Women Ethnic</Link>
                <Link to="/WomenWestern">Women Western</Link>
                <Link to="/jewellery">Jewellery & Accessories</Link>
                <Link to="/Men">Men</Link>
                <Link to="/Beauty">Beauty & Health</Link>
                {/* <Link to="/bags">Bags & Footwear</Link> */}
                <Link to="/Home">Home&Kitchen</Link>
                <Link to="/kids">Kids Electronics</Link>
                <div className="cart">
                    <Link to="/cart">Cart</Link>

                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/WomenEthnic" element={<WomenEastern/>}></Route>
                    <Route path="/WomenEthnic/:userid" element={<Show/>}></Route>
                    <Route path="/WomenWestern" element={<WomenWestern/>}></Route>
                    <Route path="/WomenWestern/:userid" element={<Show/>}></Route>

                    <Route path="/jewellery" element={<Jewellary/>}></Route>
                    <Route path="/jewellary/:userid" element={<Show/>}></Route>

                    <Route path="/Men" element={<Men/>}></Route>
                    <Route path="/Men/:userid" element={<Show/>}></Route>

                    <Route path="/Beauty" element={<Beauty/>}></Route>
                    <Route path="/Beauty/:userid" element={<Show/>}></Route>

                    <Route path="/bags" element={<Bag/>}></Route>
                    <Route path="/bags/:userid" element={<Show/>}></Route>

                    <Route path="/Home" element={<Applince/>}></Route>
                    <Route path="/Home/:userid" element={<Show/>}></Route>

                    <Route path="/kids" element={<Kid/>}></Route>
                    <Route path="/kids/:userid" element={<Show/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path="/payment" element={<Payment/>}></Route>


                </Routes>

            </div>
        </div>
    )

}