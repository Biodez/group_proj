import React, { useState } from "react";
import axios from "axios";

const CartForm = (props) => {
  const { pdtId } = props;
  const [cart, setCart] = useState(false);
  const [userCart, setUserCart] = useState([]);
  console.log("Number of Items in cart", userCart.length);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCart = {
      cart: cart,
    };
    // console.log(newCart.cart);
    if (newCart.cart == true) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/client/addcart/${pdtId}`,
          newCart,
          { withCredentials: true }
        );
        // console.log(response);
        setUserCart(response.data.cart);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/client/removecart/${pdtId}`,
          newCart,
          { withCredentials: true }
        );
        // console.log(response);
        setUserCart(response.data.cart);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div>
        <p>Number of items in cart {userCart.length}</p>
      </div>
      <form onSubmit={submitHandler}>
        <button onClick={(e) => setCart(!cart)}>Add to cart</button>
      </form>
    </div>
  );
};

export default CartForm;
