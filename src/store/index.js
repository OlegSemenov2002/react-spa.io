import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './rootReducer.js';
import thunk from 'redux-thunk'


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
