import React, { useState } from "react";
import axios from "axios";

const CartForm = (props) => {
  const { pdtId, loaded, setLoaded } = props;
  const [cart, setCart] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCart = {
      cart: cart,
    };
    // console.log(newCart.cart);
    // if (newCart.cart === true) {
    try {
      await axios.put(
        `http://localhost:8000/api/client/addcart/${pdtId}`,
        newCart,
        { withCredentials: true }
      );
      // console.log(response);
      setLoaded(!loaded);
    } catch (error) {
      console.log(error);
    }
    // } else {
    //   try {
    //     const response = await axios.put(
    //       `http://localhost:8000/api/client/removecart/${pdtId}`,
    //       newCart,
    //       { withCredentials: true }
    //     );
    //     // console.log(response);
    //     setUserCart(response.data.cart);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <button onClick={(e) => setCart(cart + 1)}>Add to cart</button>
      </form>
    </div>
  );
};

export default CartForm;
