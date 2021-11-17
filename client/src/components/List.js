import React from "react";
import { Link } from "@reach/router";
import CartForm from "./CartForm";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductList = (props) => {
  // const [user, setUser] = useState([]);
  // console.log(user);
  // useEffect(() => {
  //   console.log("sending request");
  //   axios
  //     .get("http://localhost:8000/api/user")
  //     .then((res) => {
  //       setUser(res.data);
  //       // setLoaded(true);
  //     })
  //     .catch((err) => console.log(err.response));
  // }, []);
  return (
    <div>
      {/* <div style={{ textAlign: "right", margin: "20px" }}>
        {user && user.cart && <p>{user.cart.length} items in your cart</p>}
      </div> */}
      {props.product.map((product, idx) => {
        return (
          <div className="list" key={idx}>
            <div><hr />
              <img className="viewImg" src={product.imageLink} alt="box" />
              <h3>About</h3>
              <Link
                style={{ marginRight: "10px" }}
                to={`/product/${product._id}`}
              >
                Name: {product.title}
              </Link>
              {/* <p>Name: {product.title}</p> */}
              <p>Description: {product.about}</p>
              <p>Brand: {product.brand}</p>
            </div>

            <div >
              <hr />
              <p>Price: ${product.price}</p>
              <button>Buy Now</button>
              <CartForm pdtId={product._id} />
            </div>

          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
