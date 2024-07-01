import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({data, showIndex, setShowIndex}) =>{
    //console.log(data)

    const handleShowListItems = () =>{
         //setShowItems(!showItems);
         setShowIndex();
    };

    return(
        <div>
            <div className="w-6/12 my-4 mx-auto bg-gray-50 shadow-lg p-2">
                <div className="flex justify-between cursor-pointer" onClick={handleShowListItems}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                {showIndex && <RestaurantItemList item={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;