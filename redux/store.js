import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import postsSlice from "./reducers/postsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const bindMiddleware = (middleware) => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combineReducers({ posts: postsSlice });
  }
};

const rootReducer = combineReducers({ posts: postsSlice });
const makeStore = () =>
  configureStore({
    reducer:rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({ serializableCheck: false }),
  });

export const wrapper = createWrapper(makeStore);
