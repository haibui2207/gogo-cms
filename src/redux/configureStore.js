import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import history from '@/history';
import message from '@/intl';
import { localStorage } from '@/services';
import { INTL_LOCALE } from '@/configs';

import rootSagas from './sagas';
import rootDucks from './ducks';

const locale = localStorage.getItem('locale') || INTL_LOCALE.split('-')[0];

/**
 * Initial redux saga state
 */
const initialState = {
  intl: { locale, messages: message[locale] },
};
/**
 * More infomation read here
 * https://redux-saga.js.org/docs/api/#createsagamiddlewareoptions
 */
const sagaMiddleware = createSagaMiddleware();
/**
 * Using Redux DevTools Extension to debug Redux's state on browser
 * https://github.com/zalmoxisus/redux-devtools-extension
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * Add external middlewares connect to Redux store
 */
const middlewares = [routerMiddleware(history), sagaMiddleware];
const rootReducers = combineReducers({
  router: connectRouter(history),
  intl: intlReducer,
  ...rootDucks,
});
/**
 * Redux store
 */
const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default {
  store,
  runSagaMiddleware: () => sagaMiddleware.run(rootSagas),
};
