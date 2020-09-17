import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { default as Score } from './Score';
// import { default as Yaku } from './Yaku';

export const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        Score,
    });

export { Score };