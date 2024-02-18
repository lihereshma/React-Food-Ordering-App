import { img_cdn_URL } from '../utils/constants';
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { 
    cloudinaryImageId, 
    name, 
    cuisines, 
    avgRating,
    avgRatingString,
    aggregatedDiscountInfoV3,
    locality
  } = resData?.info;

  return (
    <div className="res-card">
      <div className='relative shadow-xl rounded-3xl overflow-hidden'>
        <img src={ img_cdn_URL + cloudinaryImageId } alt={ name } />
        <h5 
          className='px-5 pb-3 pt-12 absolute bottom-0 left-0 w-full text-xl font-extrabold text-white 
          bg-gradient-to-t from-neutral-900 to-transparent'
        >
          { aggregatedDiscountInfoV3.header } { aggregatedDiscountInfoV3.subHeader }
        </h5>
      </div>     
      <div className='p-5'>
        <h3 className='text-xl font-semibold text-gray-800'>
          { name.length > 25  ? name.slice(0, 25) + '...' : name }
        </h3>
        <h4 className='font-bold text-gray-800 text-base'>
          <FaStar style={{margin: '0 2px 4px 0', color: 'green', display: 'inline', fontSize: '18px'}} /> { avgRatingString }
        </h4>
        <p className='text-gray-500'>
          { cuisines.length > 4 ? cuisines.slice(0, 4).join(", ")+ '...' : cuisines.join(", ") }
        </p>
        <p className='text-gray-600'>{ locality }</p>
      </div>     
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Open</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;