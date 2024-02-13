import { useSelector, useDispatch } from "react-redux";
import CategoriesItems from "./CategoriesItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>Cart is empty.</h1>}
        <CategoriesItems items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;