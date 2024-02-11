import { useEffect, useState } from "react";
import { swiggy_menu_api_URL, img_cdn_URL } from "../utils/constants";
import { useParams } from 'react-router-dom';
import useSingleRestaurant from "../utils/useSingleRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const SingleRestaurant = () => {
  const { resId } = useParams();
  const resInfo = useSingleRestaurant(resId);
  const [showIndex, setShowIndex] = useState();

  if(resInfo === null) return <h1>Loading...</h1>;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  .filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

  return (
    <div className="menu">
      <h3>{ name }</h3>
      <p>{ cuisines.join(", ") }</p>
      {categories.map((category, index) => (
        <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>

  )
}

export default SingleRestaurant;