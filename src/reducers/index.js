import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { default as Score } from './Score';

export const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        Score,
    });

export { Score };