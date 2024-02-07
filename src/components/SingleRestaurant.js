import { useEffect, useState } from "react";
import { swiggy_menu_api_URL, img_cdn_URL } from "../utils/constants";
import { useParams } from 'react-router-dom';

const SingleRestaurant = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();

    setResInfo(json?.data);
    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  }

  if(resInfo === null) return <h1>Loading...</h1>;

  const { name, cloudinaryImageId, cuisines, avgRating } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


  return (
    <div className="menu">
      <img src={ img_cdn_URL + cloudinaryImageId } alt={ name } />
      <h3>{ name }</h3>
      <p>{ cuisines.join(", ") }</p>
      <h4>{ avgRating } stars</h4>
      <p>Menu: </p>
      <ul>
        { itemCards.map(item => 
          <li key={ item.card.info.id }>
            { item.card.info.name } - {"Rs. "}{ item.card.info.price/100 || item.card.info.defaultPrice/100 }
          </li>
        )}        
      </ul>
    </div>

  )
}

export default SingleRestaurant;