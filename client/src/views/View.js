import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ItemList from '../components/List';
const Main = () => {
    const [item, setItem] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => {
                setItem(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = itemId => {
        setItem(item.filter(item => item._id != itemId));
    }
    return (
        <div>
            <hr />
            <h2>All Item's</h2>
            {loaded && <ItemList item={item} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;