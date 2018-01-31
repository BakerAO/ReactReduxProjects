import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './blog/components/posts_index';
import PostsNew from './blog/components/posts_new';
import PostsShow from './blog/components/posts_show';
import YoutubePage from './youtube/youtube_page';
import WeatherApp from './weather/components/weather_app';
import HomePage from './home_page.js';
import NavBar from './nav';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/posts/:id" component={PostsShow} />
                    <Route path="/posts/" component={PostsIndex} />
                    <Route path="/youtube/" component={YoutubePage} />
                    <Route path="/weather/" component={WeatherApp} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('.container')
);