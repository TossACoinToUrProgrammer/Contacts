import { createStore, combineReducers } from "redux";
import contactsReducer from "./contacts-reducer";

let redusers =combineReducers({
    contactsPage:contactsReducer
});

let store = createStore(redusers);

export default store;