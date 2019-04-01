// import our logger for redux
import { createLogger } from "redux-logger";

// import a library to handle async with redux
import thunk from "redux-thunk";

// import the redux parts needed to start our store
import { createStore, applyMiddleware, compose } from "redux";

import reducer from './reducers';

const middleware = [thunk];

// any enhancers here
const enhancers = [];

// use Redux devtools
if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }

    middleware.push(createLogger());
  }

  // compose our middleware
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // create our redux store using our reducer and our middleware
const store = createStore(reducer, composedEnhancers);

export default store;
