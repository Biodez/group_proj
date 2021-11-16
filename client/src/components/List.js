import React from 'react'
import { Link } from '@reach/router'

const ProductList = (props) => {

    return (
        <div>
            {props.product.map((product, idx) => {
                return <div key={idx}>
                    <div>
                        <img className="viewImg" src={product.imageLink} alt="box" />
                        <h3>About</h3>
                        <p>Name: {product.title}</p>
                        <p>Description: {product.about}</p>
                        <p>Brand: {product.brand}</p>
                    </div>
                    <div>
                        <p>Price: {product.price}</p>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                    <hr />
                </div>
            })}
        </div>
    )
}
export default ProductList;