import { createStore, combineReducers } from "redux";
import contactsReducer from "./contacts-reducer";
import profileReducer from "./profile-reducer";

let redusers =combineReducers({
    contactsPage:contactsReducer,
    profilePage:profileReducer,
});
let store = createStore(redusers);

export default store;