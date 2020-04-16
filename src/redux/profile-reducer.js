const SET_PROFILES="SET_PROFILES";
const SET_PROFILE="SET_PROFILE";
const SET_NEW_PROFILE="SET_NEW_PROFILE";
let initialState = {
  contacts: null,
  contact:null,
  newContact:null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return { ...state, contacts: action.contacts };
    case SET_PROFILE:
      return { ...state,newContact:action.contact, contact: action.contact };
    case SET_NEW_PROFILE:
      return {...state, newContact:action.contact};
    default:
        return state;
  }
};

export const setProfiles = (contacts) => {
  return {
    type: SET_PROFILES,
    contacts,
  };
};
export const setNewContact = (contact) => {
  return {
    type: SET_NEW_PROFILE,
    contact,
  };
};
export const setProfile = (contact) => {
  return {
    type: SET_PROFILE,
    contact,
  };
};

export default profileReducer;
