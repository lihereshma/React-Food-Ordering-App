import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../utils/constants';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {            
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {          
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={ restaurant.id } resData={ restaurant } />
          ))
        }
      </div>
    </div>
  )
}

export default Body;