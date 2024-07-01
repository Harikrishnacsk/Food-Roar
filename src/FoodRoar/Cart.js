import { useDispatch, useSelector } from "react-redux";
import RestaurantItemList from "./RestaurantItemList";
import { clearItem } from "./utlis/CartSlice";
import { useState } from "react";

const Cart = () =>{ 

    const cartItems =  useSelector((store) => store.cart.item);  
    console.log(cartItems);
    const Price = cartItems[0]?.card?.info?.defaultPrice/100 || cartItems[0]?.card?.info?.price/100 ;
    console.log(Price);
    const dispatch = useDispatch();

    const handleClearCartItem = (cartItems) =>{
          dispatch(clearItem(cartItems))
    }

   return(
    <div>
    <div className="m-2 text-center font-bold text-lg">Cart items</div>
    <div className="flex">
    <div className="w-6/12 pl-20">
        <button className="m-2 p-2 bg-slate-600 text-white rounded-xl"
                onClick={() => handleClearCartItem(cartItems)}
        > clear cart</button>
        {cartItems.length === 0 ? <h4>Add items to cart</h4> : 
        <RestaurantItemList item={cartItems}/> }
    </div>
    { cartItems.length != 0 ? 
       <div className=" flex w-3/12 ml-20 h-auto pl-5 pt-8 shadow-lg">
       {/*<p>Subtotal - ₹ {Price}</p>*/}
       <p>Subtotal - ₹ {cartItems.map((item) =>(
             item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100
       ))}</p>
    </div> : null}
    </div>
    </div>
   )
}

export default Cart;