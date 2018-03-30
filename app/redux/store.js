import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';


import reducer from 'reduxStore/';

const middleWares = [ reduxThunk ];

const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;