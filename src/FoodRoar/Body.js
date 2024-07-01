import React, { useContext, useEffect } from 'react'
import RestaurantCards, {openRestaurantCards} from './RestaurantCards';
//import './FoodRoar.css';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utlis/useOnlineStatus';
import UserContext from './utlis/UserContext';

const Body = () => {

  const resObj=[
    {
      "info": {
        "id": "16235",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Nungambakkam",
        "averageRating": 4.3,
        "deliveryTime": 32
      }
    },
    {
      "info": {
        "id": "16236",
        "name": "DOMINOS",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Permabur",
        "averageRating": 3.0,
        "deliveryTime": 15
      }
    },
    {
      "info": {
        "id": "16237",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Teynampet",
        "averageRating": 4.1,
        "deliveryTime": 20
      }
    }
  ]

  const [listTopRestaurants, setListTopRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState('');
  const {loggedInUser, setUserName} = useContext(UserContext);
  const WithOpenTextCards = openRestaurantCards(RestaurantCards);

  
  //console.log(filteredList)

   useEffect(() => {
        fetchData();
   },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0474616&lng=80.2478142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
         console.log(json);
         let jsonResult = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListTopRestaurants(jsonResult)
        setFilteredList(jsonResult)
    };

     const onlineStatus = useOnlineStatus();
     if(onlineStatus === false) return (<h1>Looks like your offline! please check your internet.</h1>)

      if(listTopRestaurants.length === 0){
        return <Shimmer/>
    }
  return (
      <div>    
        
      <div className="filter m-4 flex">
      <button className="Top-Rated-Restaurants mx-10 bg-orange-400 p-2" 
      onClick={() =>{
        const filterd = listTopRestaurants.filter((res) => res.info.avgRating > 4)
        setListTopRestaurants(filterd)
      }}>
      Top Rated Restaurants</button>
      <div className="search">
        <input className="p-2 bg-gray-200 text-gray-700" placeholder='Search' type="text" value={searchText} 
        onChange={(e)=>{setSearchText(e.target.value);
        }}
         />
        <button className="m-4 p-2 border" onClick={() =>{
          const filteredRestaurant = listTopRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredList(filteredRestaurant);
        }}>Search</button>
      </div>

      <div>
        <input 
        className="border border-black" 
        value={loggedInUser}
        onChange={(e) =>setUserName(e.target.value)}
        />
      </div>
      </div>
      <div className='flex flex-wrap'>  
      {filteredList.map((restaurant)=>
        <Link to={"restaurants/" +restaurant.info.id} key={restaurant.info.id}>
          {restaurant.info.isOpen ? <WithOpenTextCards resData={restaurant}/> 
          : <RestaurantCards resData={restaurant}/>}         
          </Link>
      )}  
      </div>
      </div>
  )
}

export default Body;