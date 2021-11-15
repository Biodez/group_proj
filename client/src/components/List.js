import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const ItemList = (props) => {

    return (
        <div>
            {props.item.map((item, idx) => {
                return <p key={idx}>
                    <Link to={`/items/${item._id}`}>{item.title}</Link>,
                </p>
            })}
        </div>
    )
}
export default ItemList;