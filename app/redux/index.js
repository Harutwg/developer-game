import { combineReducers } from 'redux';
import data from './reducers/data-reducers';

const rootReducer = () => ({});

export default combineReducers({
    root: rootReducer(),
    data,
});