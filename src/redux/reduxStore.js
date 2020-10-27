import { createStore, combineReducers } from "redux";
import friendsBoxReducer from "./friendsBoxReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsBox: friendsBoxReducer
});

const store = createStore(reducers);

export default store;
