const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  contacts: null,
  isFetching: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, contacts: action.contacts };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
        return state;
  }
};

export const setContacts = (contacts) => {
  return {
    type: SET_USERS,
    contacts,
  };
};
export const toggleIsFetching=(isFetching)=>{
    return {
      type:TOGGLE_IS_FETCHING,
      isFetching
    }
  }
export default contactsReducer;
