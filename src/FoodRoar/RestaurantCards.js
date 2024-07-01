import React, { useContext } from 'react'
//import './FoodRoar.css'
import { CDN_URL } from './utlis/Constants';
import UserContext from './utlis/UserContext';

const RestaurantCards = (props) => {
   const { resData } = props;
   const {loggedInUser} = useContext(UserContext)

   const{
      name,
      cloudinaryImageId,
      locality,
      avgRating
   } = resData?.info;

   const {
     deliveryTime
   } = resData?.info.sla;

  return (
    <div className='m-2 p-2 w-[200px] shadow-lg'>
    <img src={CDN_URL+cloudinaryImageId} 
    alt="img" 
    className='res-img'/>
        <div className='name'><b>{name}</b></div>     
      <div className='locality'>{locality}</div>
      <div className='rating'>{avgRating}</div>
      <div>Delivery in <b>{deliveryTime}</b> mins</div>
      <div>User : {loggedInUser}</div>
    </div>
  )
}

 export const openRestaurantCards = (RestaurantCards) => {
   return (props) =>{
     return (
       <div>
        <label className="absolute bg-black text-white p-2" >OPEN</label>
        <RestaurantCards  {...props}/>
       </div>
     )
   }
}

export default RestaurantCards;