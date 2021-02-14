import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';

const api_key = `2720b82d8b02c331a89827b268dce22a`;
const rated_api = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`;
const search_api = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;
const images_api = `https://image.tmdb.org/t/p/w1280/`;

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  </BrowserRouter>
);

export default App;