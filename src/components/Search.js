import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Pop from './Popular';


const api_key = '2720b82d8b02c331a89827b268dce22a';
const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=2720b82d8b02c331a89827b268dce22a&query=';
const images_api = 'https://image.tmdb.org/t/p/w1280/';

class Search extends Component {
    render() {
        return (
            <div className="search-wrap">
                <SearchBar />
            </div>
        );
    }
}

function SearchBar() {
    const [ movies, setMovies ] = useState([]);
    const [ search, setSearch ] = useState("");

    useEffect(async () => {
        const searchResult = await axios.get(search_api + search);
        setMovies(searchResult.data.results)
    }, [search])

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (
        <>
            <form>
                <input type="text" className="search" placeholder="Search for a movie..." value={search} onChange={handleChange}  />
            </form>
            <div className="rate-wrap">
                {movies.slice(0, 10).map(book => (
                    <GotIt key={book.id} {...book} />
                ))}
            </div>
        </>
    )
}

const GotIt = ({ title, poster_path, vote_average }) => {
    return(
        <div className="top-rated">
            <img src={images_api + poster_path} alt={title} />
            <div className="top-rated-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default Search