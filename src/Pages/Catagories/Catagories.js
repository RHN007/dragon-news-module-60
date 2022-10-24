
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagories = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <h2>This is category has news : {news.length}</h2>
        </div>
    );
};

export default Catagories;