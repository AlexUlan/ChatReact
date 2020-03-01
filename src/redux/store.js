import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const midlewere = [ReduxThunk]

/* const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(...ReduxThunk))
  ); */

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
