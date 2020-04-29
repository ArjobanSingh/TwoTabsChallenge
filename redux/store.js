import { createStore, applyMiddleware  } from 'redux'

import RootReducer from './reducers'

import thunk from 'redux-thunk';

// store with root reducer
let store = createStore(RootReducer, applyMiddleware(thunk))

export default store;

// store.subscribe(() => console.log(store.getState()))

