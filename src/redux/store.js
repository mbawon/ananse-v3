import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {persistReducer} from 'redux-persist';
import loggerMiddleware from '../middleware/logger'
import monitorReducerEnhancer from '../enhancers/monitorReducer'
import storage from 'redux-persist/lib/storage/session'
import login from '../features/login.feature';
import user from '../features/user.feature';
import region from '../features/region.feature';
import zone from '../features/zone.feature';
import area from '../features/area.feature';
import statistic from '../features/statistic.feature';

const rootReducer = combineReducers({
  login,
  user,
  region,
  zone,
  area,
  statistic
});

const middlewares = [loggerMiddleware, thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
const composedEnhancers = compose(...enhancers)

const persistConfig = {
  key: 'root',
  whitelist:['login'],
  storage: storage,
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = createStore(persistReducers, composedEnhancers)

export default store;
