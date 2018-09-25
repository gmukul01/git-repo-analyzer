import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import user from "reducers/user";
import search from "reducers/search";

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({ user, search }), composeWithDevTools(applyMiddleware(sagaMiddleware)));
