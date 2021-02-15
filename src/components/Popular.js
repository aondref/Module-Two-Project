import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = `2720b82d8b02c331a89827b268dce22a`;
const popular_api = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
const top_rated_api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
const images_api = `https://image.tmdb.org/t/p/w1280/`;

function Popular() {
    const [ popular, setPopular] = useState([]);

    useEffect( () => {
        try {
            axios.get(popular_api)
                .then((res) => {
                    setPopular(res.data.results);
                })
        } catch (e) {
            console.error(e, e.message);
        }
    })

    return (
        <div className="home-body">
            {popular.slice(0, 10).map( pops => (
                <Pop key={pops.id} {...pops} />
            )) }
        </div>
    )
}

const Pop = ({ title, poster_path, vote_average }) => {
    return(
        <div className="popular">
            <img src={images_api + poster_path} alt={title} />
            <div className="popular-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default Popular;