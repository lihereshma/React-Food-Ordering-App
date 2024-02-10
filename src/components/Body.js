import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList, swiggy_api_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you are offline... Please check your internet connection</h1>

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">     
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className='searchBox' 
            value={ searchValue } 
            onChange={(e) => {
              setSearchValue(e.target.value);
            }} 
          />
          <button className='search-btn'
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button 
          className="filter-btn"
          onClick={() => {            
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {          
          filteredRestaurant.map((restaurant) => (
            <Link key={ restaurant.info.id } to={'/restaurant/' + restaurant.info.id }><RestaurantCard resData={ restaurant } /></Link>
          ))
        }
      </div>
    </div>
  )
}

export default Body;