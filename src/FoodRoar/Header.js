import React, { useContext, useEffect, useState } from 'react'
import FoodRoarLogoimg from './FoodRoarLogo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './FoodRoar.css';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utlis/useOnlineStatus';
import Grocery from './Grocery';
import UserContext from './utlis/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

   const [btnLogin, setBtnLogin] = useState("Login");
    console.log("header rendered");

   const {loggedInUser} = useContext(UserContext);
   

    useEffect(() =>{
       console.log('useeffect rendered');
    }, [btnLogin])

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.item);
    console.log(cartItems);

  return (
    <div className="flex justify-between sticky top-0 bg-white shadow-lg">
      <div className="w-28">
      <img src={FoodRoarLogoimg} alt="FoodRoar Logo" className='m-2 rounded-2xl'/>
      </div>
      <div className='flex items-center'>
        <ul className="flex p-4">
          <li className='px-4'>
          onlineStatus : {onlineStatus ? "✅" : "🔴"} 
          </li>
          <li className='px-3'><Link to="/">Home</Link></li>
          <li className='px-3'><Link to="/contactus">contact us</Link></li>
          <li className='px-3'><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <li className='px-3'><Link to="/about">About us</Link></li>
          <li className='px-3'><Link to="/grocery">Grocery</Link></li>
          <button className="login-btn" onClick={() =>{
            btnLogin === "Login" 
            ?setBtnLogin("Logout")
            : setBtnLogin("Login")
          }}>{btnLogin}</button>
          <li className='px-3'>{loggedInUser}</li>
        </ul>
      </div>
    </div>   
  )
}

export default Header;