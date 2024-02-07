import { img_cdn_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

  return (
    <div className="res-card">
      <img src={ img_cdn_URL + cloudinaryImageId } alt={ name } />
      <h3>{ name }</h3>
      <p>{ cuisines.join(", ") }</p>
      <h4>{ avgRating } stars</h4>
    </div>
  )
}

export default RestaurantCard;