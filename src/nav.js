import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">eip10</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/posts">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/youtube">Quick Youtube</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/weather">Weather</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://eip10.site">Frame Store</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;