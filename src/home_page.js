import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link className="btn btn-primary" to="/posts/" >
                        Blog
                    </Link>
                </div>
                <div>
                    <Link className="btn btn-primary" to="/youtube/" >
                        Fast Youtube
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;