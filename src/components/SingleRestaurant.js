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
    console.log(json?.data);
  }

  if(resInfo === null) return <h1>Loading...</h1>;

  const { name, cloudinaryImageId, cuisines, avgRating } = resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } = resInfo?json?.data?.cards.find(x=> x.groupedCard)?.
  // groupedCard?.cardGroupMap?.REGULAR?.
  // cards?.map(x => x.card?.card)?.
  // filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
  // map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];


  return (
    <div className="menu">
      <img src={ img_cdn_URL + cloudinaryImageId } alt={ name } />
      <h3>{ name }</h3>
      <p>{ cuisines.join(", ") }</p>
      <h4>{ avgRating } stars</h4>
      <p>Menu: </p>
      <ul>
        {/* { itemCards.map(item => <li key={ item.card.info.id }>{ item.card.info.name }</li>) }         */}
      </ul>
    </div>

  )
}

export default SingleRestaurant;