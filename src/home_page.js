import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>

                <Link  to="/posts/" >
                    <div id="divSquare">
                        <div id="divContent">
                            <div id="divTable">
                                <div id="divTableCell">
                                    Posts
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/youtube/" >
                    <div id="divSquare">
                        <div id="divContent">
                            <div id="divTable">
                                <div id="divTableCell">
                                    Fast Youtube
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <div id="divSquare">
                    <div id="divContent">
                        <div id="divTable">
                            <div id="divTableCell">
                                Weather
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default HomePage;