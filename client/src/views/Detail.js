import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, useNavigate } from '@reach/router';

const Detail = (props) => {
    const [item, setItem] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/items/" + props.id)
            .then(res => setItem({
                ...res.data
            }))
    })
    return (
        <div>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>About: {item.about}</p>
            <p>Ratings: {item.ratings}</p>
            <p>Brand: {item.brand}</p>
            <hr />
        </div >
    )
}
export default Detail;