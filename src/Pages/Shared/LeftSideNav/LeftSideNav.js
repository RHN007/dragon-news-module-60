import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:6001/news-categories')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])


    return (
        <div>
                <h2>All Catagories {category.length}</h2>
        {
            category.map(cat => <p key={cat.id} ><Link to={`/category/${cat.id}`}>{cat.name}</Link></p>)
        }

        </div>
    );
};

export default LeftSideNav;