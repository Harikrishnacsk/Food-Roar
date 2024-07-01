import { useDispatch } from "react-redux";
import { CDN_URL } from "./utlis/Constants";
import { addItem } from "./utlis/CartSlice";

const RestaurantItemList = ({item}) =>{
    console.log(item)
  
    const dispatch = useDispatch();

    const handleAddCartItem = (items) => {
        dispatch(addItem(items));
    }

    return(
        <div>
           <ul>
            {item.map((items) =>(
              <div key={items?.card?.info?.id} className="text-left border-b-2 flex">
                <div className="w-9/12">
                <div className="my-2 font-bold">
                <span>{items?.card?.info?.name}</span>
                <span> - ₹{items?.card?.info?.defaultPrice/100 || items?.card?.info?.price/100}</span>
                </div>
                <p>{items?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4">               
                <div className="w-16 absolute">
                    <button className= "p-1 rounded-lg shadow-lg bg-slate-400"
                    onClick={() => handleAddCartItem(items)}
                    >Add +</button>
                </div>
                <img src={CDN_URL + items?.card?.info?.imageId}/>
                </div>
              </div>
            ))}
           </ul>
        </div>
    )
}

export default RestaurantItemList;