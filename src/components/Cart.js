import { useSelector, useDispatch } from "react-redux";
import CategoriesItems from "./CategoriesItems";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="max-w-screen-lg mx-auto text-center">
      <h1 className="text-4xl font-semibold">Cart</h1>
      <div>
        { cartItems.length != 0 && <button onClick={handleClearCart}>Clear Cart</button> }       
        {cartItems.length === 0 && (
          <div>
            <h1 className="text-xl">Your cart is empty.</h1>
            <p>You can go to home page to view more restaurants</p>
            <Link to='/'>Back to Home</Link>
          </div>
        )}
        <CategoriesItems items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;