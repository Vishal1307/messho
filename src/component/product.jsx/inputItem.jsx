import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const InputItem=()=>{
    const {inp}=useSelector((store)=>store.data)
    
    return (
        <div>
            <div className="product">
                {
                    inp.length>0? inp.map((cv)=>{
                        return <Link to={`/${cv.id}`} key={cv.id}>
                            <div className="product2">
                                <img src={cv.images} alt="" />
                                <h2>{cv.title}</h2>
                                <p>discounted_price:-₹{cv.discounted_price} && ₹{cv.original_price}</p>
                                
                            </div>
                        </Link>
                    }):"there is no any serch item"

                }
                
            </div>
        </div>
    )
}