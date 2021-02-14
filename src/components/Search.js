import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import api_key from '../App'
import search_api from '../App';
import images_api from '../App';
import Pop from './Popular';

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
    const [ searchMovie, setSearchMovie ] = useState("");


   
    return (
        <>
          <input type="text" className="search" placeholder="Search for a movie..." />
        </>
    )
}

export default Search
