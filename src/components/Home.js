import React, { Component } from 'react';
import Popular from './Popular'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h2 className="pop-title">Popular Movies:</h2>
                <Popular />
            </div>
        );
    }
}

export default Home
