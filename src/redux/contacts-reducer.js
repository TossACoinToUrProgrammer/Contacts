const SET_CONTACTS = "SET_CONTACTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FAV = "TOGGLE_IS_FAV";
const SET_SORT="SET_SORT";
let initialState = {
  contacts: null,
  isFetching: false,
  sort:null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FAV:
      let contactsCopy = [...state.contacts];
      contactsCopy=contactsCopy.map(item=>{
        if(item.id===action.id){
          item.isFavourite=!item.isFavourite;
        }
        return item;
      })
      localStorage.setItem('contacts',JSON.stringify(contactsCopy));
      return { ...state, contacts:contactsCopy};
    case SET_SORT:
      if(state.sort!==action.sort){
        if (action.sort === "sort") {
          let sorted = JSON.parse(localStorage.getItem("contacts"));
          sorted.sort((prev, next) => {
            if (prev.firstName < next.firstName) return -1;
            if (prev.firstName < next.firstName) return 1;
          });
          return {...state,sort:action.sort, contacts:sorted};
        } else if (action.sort === "reverseSort") {
          let sorted = JSON.parse(localStorage.getItem("contacts"));
          sorted.sort((prev, next) => {
            if (prev.firstName > next.firstName) return -1;
            if (prev.firstName > next.firstName) return 1;
          });
          return {...state,sort:action.sort, contacts:sorted};
        } else if (action.sort === "favs") {
          let sorted = JSON.parse(localStorage.getItem("contacts")).filter(
            (item) => item.isFavourite === true
          );
          return {...state, sort:action.sort, contacts:sorted};
        }
      }
      else{return{...state, contacts:JSON.parse(localStorage.getItem("contacts")), sort:null}}
    default:
        return state;
  }
};

export const setContacts = (contacts) => {
  return {
    type: SET_CONTACTS,
    contacts,
  };
};
export const toggleIsFetching=(isFetching)=>{
    return {
      type:TOGGLE_IS_FETCHING,
      isFetching
    }
  }
export const toggleIsFav=(id)=>{
  return {
    type:TOGGLE_IS_FAV,
    id
  }
}
export const setSort=(sort)=>{
  return {
    type:SET_SORT,
    sort
  }
}
export default contactsReducer;
