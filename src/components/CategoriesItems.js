import { img_cdn_URL } from "../utils/constants";

const CategoriesItems = ({items}) => {
  return (
    <div>
      <ul className="category-items">
        { items.map(item => 
          <li key={ item.card.info.id }>
            <div>
              <div className="item-content">
                <h5>{ item.card.info.name }</h5> 
                {"Rs. "}{ item.card.info.price/100 || item.card.info.defaultPrice/100 }
              </div>
              <div className="item-img">
                <img src={ img_cdn_URL + item.card.info.imageId } alt={ item.card.info.name } />
              </div>
            </div>  
          </li>
        )}        
      </ul>
    </div>
  )
}

export default CategoriesItems;