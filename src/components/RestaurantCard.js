const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData;

  return (
    <div className="res-card">
      <img src="#" alt="Restaurant" />
      <h3>{ name }</h3>
      <p>{ cuisines.join(", ") }</p>
      <h4>{ avgRating } stars</h4>
    </div>
  )
}

export default RestaurantCard;