import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(),
		middlewares = [sagaMiddleware]
		
  if (process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
  
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore
