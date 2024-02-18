import { useEffect, useState, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { resList, swiggy_api_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json.data)
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you are offline... Please check your internet connection</h1>

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body max-w-screen-lg mx-auto">     
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
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top rated restaurants
        </button>
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" id="userName"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container grid grid-cols-3 gap-8">
        {          
          filteredRestaurant.map((restaurant) => (
            <Link 
              key={ restaurant.info.id } 
              to={'/restaurant/' + restaurant.info.id }
              className='transition-transform hover:scale-95'
              >
                {
                  // restaurant.info.isOpen ? (
                  // <RestaurantCardPromoted resData={ restaurant } />
                  // ) : 
                  (
                  <RestaurantCard resData={ restaurant } />
                  )
                }
                
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Body;