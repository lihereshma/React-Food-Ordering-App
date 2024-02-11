import { useState } from "react";
import CategoriesItems from "./CategoriesItems";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div className="accordion">
      <div 
        className="accordion-head"
        onClick={handleClick}
      >
        <h3>{data?.title} ({data?.itemCards.length})</h3>
      </div>

      {showItems && <div className="accordion-body"><CategoriesItems items={data?.itemCards}/></div>}
      
    </div>
  )
}

export default RestaurantCategory;