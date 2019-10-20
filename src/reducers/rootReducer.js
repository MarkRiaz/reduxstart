import { combineReducers } from 'redux';

// @REDUCERS
import swapiReducer from './swapiReducer';


// @ROOT REDUCER
const rootReducer =  combineReducers({
    swapiReducer: swapiReducer,
});

export default rootReducer;
