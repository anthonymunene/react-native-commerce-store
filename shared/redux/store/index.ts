import * as thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import reducers from '../reducers';

/**
 * Custom middle ware implementations
 */
// import { logger } from '../middlewares/logger';
// import { crashReporter } from '../middlewares/logger';

let middlewares = [thunkMiddleware.default];
if (__DEV__) {
  const logger = require('redux-logger');
  const loggerMiddleware = logger.createLogger({
    duration: true,
  });
  middlewares = [...middlewares, loggerMiddleware];
}
const store = createStore(reducers, applyMiddleware(...middlewares));

/**
 * Add custom middlewares
 * They are executed in the order they are registered here
 */
// const store = createStore(reducers, applyMiddleware(...middlewares, crashReporter, logger));

export type AppDispatch = typeof store.dispatch;

export default store;
