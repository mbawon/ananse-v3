import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {persistReducer} from 'redux-persist';
import loggerMiddleware from '../middleware/logger'
import monitorReducerEnhancer from '../enhancers/monitorReducer'
import storage from 'redux-persist/lib/storage/session'
import login from '../features/login.feature';

const rootReducer = combineReducers({
  login
});

const middlewares = [loggerMiddleware, thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
const composedEnhancers = compose(...enhancers)

const persistConfig = {
  key: 'root',
  whitelist:['auth'],
  storage: storage,
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = createStore(persistReducers, composedEnhancers)

export default store;
