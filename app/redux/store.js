import { createStore, applyMiddleware } from 'redux';
//import { redux } from 'redux';
import reduxThunk from 'redux-thunk';

//console.error(createStore, applyMiddleware, 'redux');

import reducer from 'reduxStore/reducers/';

const middleWares = [ reduxThunk ];

const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;