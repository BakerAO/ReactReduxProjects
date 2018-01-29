import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BlogReducer from './reducer_blog';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    posts: BlogReducer,
    form: formReducer,
    weather: WeatherReducer
});

export default rootReducer;