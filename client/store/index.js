/* global __PRODUCTION__ */

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = __PRODUCTION__ ?
  applyMiddleware(sagaMiddleware)
  :
  applyMiddleware(sagaMiddleware, createLogger());

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
