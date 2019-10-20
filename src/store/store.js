import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'

const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk),
);


