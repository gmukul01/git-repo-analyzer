import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import user from "reducers/user";

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({ user }), composeWithDevTools(applyMiddleware(sagaMiddleware)));
