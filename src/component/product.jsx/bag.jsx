import { useState ,useEffect} from "react"
import { useSelector } from "react-redux"

export const Bag=()=>{
    const [bag,setBag]=useState([])
    const {data}=useSelector((store)=>store.data)
    const data1=data.filter((cv)=>{
        return cv.category== "Bags and Footwear"
    })
    useEffect(()=>{
        setBag(data1)

    },[])

    return (
        <div>
           <div className="product">
                {
                    bag.map((cv)=>{
                        return <Link to={`/bags/${cv.id}`} key={cv.id}>
                            <div className="product2">
                                <img src={cv.images} alt="" />
                                <h2>{cv.title}</h2>
                                <p>discounted_price:-₹{cv.discounted_price} && ₹{cv.original_price}</p>
                                
                            </div>
                        </Link>
                    })

                }
                
            </div>
        </div>
    )
}