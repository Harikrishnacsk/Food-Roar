import React, { useEffect } from 'react';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from './utlis/Constants';
import RestaurantCategory from './RestaurantCategory';

const RestaurantsMenu = () => {
 const [menu, setMenu] = useState(null);
 const [showIndex, setShowIndex] = useState(0);
 const { resId } = useParams();

  useEffect(() => {
       fetchMenu();
  }, []);

  const fetchMenu = async () =>{
      const menuData = await fetch( MENU_URL + resId );
      const menuList = await menuData.json();
     // console.log(menuList);   
      setMenu(menuList.data);
};

  if(menu == null) return <Shimmer/>;

  const {text} = menu?.cards[0]?.card?.card;
  const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(itemCards);

  const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((f) => 
    f.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
  //console.log(categories);

    return(
        <div className='text-center'>
          <h2>{text}</h2>
          {categories.map((category, index) =>(
             <RestaurantCategory key={category?.card?.card?.title}
             data={category?.card?.card}
             showIndex={index === showIndex ? true : false}
             setShowIndex={() =>setShowIndex(index)}/>            
          ))}
        </div>
    );
};

export default RestaurantsMenu;