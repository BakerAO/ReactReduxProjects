import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BlogReducer from './reducer_blog';

const rootReducer = combineReducers({
    posts: BlogReducer,
    form: formReducer
});

export default rootReducer;