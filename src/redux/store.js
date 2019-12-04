import { createStore, applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

const rootReducer = combineReducers({
    Count,
    Counter2
});

sagaMiddleware.run(saga)


export default store;