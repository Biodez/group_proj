import React from "react";
import { Link } from "@reach/router";
import CartForm from "./CartForm";

const ProductList = (props) => {
  const { loaded, setLoaded } = props;

  return (
    <div>
      {props.product.map((product, idx) => {
        return (
          <div className="list" key={idx}>
            <div>
              <hr />
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

            <div>
              <hr />
              <p>Price: ${product.price}</p>
              <button>Buy Now</button>
              <CartForm
                pdtId={product._id}
                loaded={loaded}
                setLoaded={setLoaded}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
