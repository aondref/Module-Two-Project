import { Link } from 'react-router-dom';

const api_key = `2720b82d8b02c331a89827b268dce22a`;
const popular_api = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const rated_api = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`;

const Header = () => {
    return (
        <header>
            <div className="banner-container">
                <h1>Athenaeum</h1>
                <p>An online library for movie posters</p>
            </div>
            <ul className="main-nav">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/search" >Search</Link></li>
            </ul>
        </header>
    );
}

export default Header
