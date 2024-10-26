import { useSelector } from "react-redux";
import ItemList from "./ItemList";

import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";



const Cart = () =>{

    const CartItems = useSelector((store)=>store.cart.items)

    

    const dispatch = useDispatch();

    const handleClearCart= ()=>{


        dispatch(clearCart())
    }

return(

    <div className="text-center m-4 p-4 font-bold ">

        <h1 className="text-2xl font-bold">cart</h1>
  

    <div className = "w-6/12 m-auto">

   
    
    {CartItems.length===0 ? <h1>Cart is empty Add Items to the Cart</h1> : <button className = "p-2 m-2 rounded-lg text-white bg-black " onClick = {handleClearCart}>Clear Cart</button>
 }
     <ItemList items  = {CartItems} /> </div>

    

    </div>


)

}

export default Cart;