import React from 'react'
import { Link } from '@reach/router'

const ProductList = (props) => {

    return (
        <div>
            {props.product.map((product, idx) => {
                return <div key={idx}>
                    <div>
                        <img src={product.imageLink} alt="box" />
                        <p>{product.title}</p>
                        <p>{product.about}</p>
                        <p>{product.brand}</p>
                    </div>
                </div>
            })}
        </div>
    )
}
export default ProductList;