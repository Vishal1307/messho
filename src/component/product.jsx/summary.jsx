import { useSelector } from "react-redux"

export const Summary=()=>{
    const {price}=useSelector((store)=>store.cart)
    const address=JSON.parse(localStorage.getItem("address"))
    
    return (
        <div>
            <h1>Order id:-{Date.now()}</h1>
            <h2>Order summary</h2>
            <p>Toatal-Amount:-{price}</p>
            <h3>AT delivery</h3>
            <p>{address.name}</p>
            <p>{address.houseno}</p>
            <p>{address.roadno}</p>
            <p>{address.city} {address.state}</p>
            <p>{address.number}</p>

            <h1>Thanku for shopping,please visite again</h1>

        


        </div>
    )
}