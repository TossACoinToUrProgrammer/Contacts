const SET_CONTACTS = "SET_CONTACTS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FAV = "TOGGLE_IS_FAV";
const SET_SORT = "SET_SORT";
const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

let initialState = {
  contacts: null,
  sortedContacts: null,
  isFetching: false,
  sort: null,
  search: "",
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.contacts };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FAV:
      let contactsCopy = [...state.contacts];
      contactsCopy = contactsCopy.map((item) => {
        if (item.id === action.id) {
          item.isFavourite = !item.isFavourite;
        }
        return item;
      });
      localStorage.setItem("contacts", JSON.stringify(contactsCopy));
      if (state.sort !== null || state.search !== "") {
        let sortedContactsCopy = state.sortedContacts.map((item) => {
          if (item.id === action.id) {
            item.isFavourite = !item.isFavourite;
          }
          return item;
        });
        return {
          ...state,
          sortedContacts: sortedContactsCopy,
          contacts: contactsCopy,
        };
      }
      return { ...state, contacts: contactsCopy };
    case SET_SORT:
      if (state.sort !== action.sort) {
        if (action.sort === "sort") {
          let sorted = JSON.parse(localStorage.getItem("contacts"));
          sorted.sort((prev, next) => {
            if (prev.firstName < next.firstName) return -1;
            return 0;
          });
          return {
            ...state,
            search: "",
            sort: action.sort,
            sortedContacts: sorted,
          };
        } else if (action.sort === "reverseSort") {
          let sorted = JSON.parse(localStorage.getItem("contacts"));
          sorted.sort((prev, next) => {
            if (prev.firstName > next.firstName) return -1;
            return 0;
          });
          return {
            ...state,
            sort: action.sort,
            search: "",
            sortedContacts: sorted,
          };
        } else if (action.sort === "favs") {
          let sorted = JSON.parse(localStorage.getItem("contacts")).filter(
            (item) => item.isFavourite === true
          );
          return {
            ...state,
            search: "",
            sort: action.sort,
            sortedContacts: sorted,
          };
        }
      } else {
        return { ...state, search: "", sortedContacts: null, sort: null };
      }
      break;
    case SET_SEARCH_TEXT:
      if (action.text!==undefined) {
        let find = JSON.parse(localStorage.getItem("contacts"));
        find = find.filter((item) =>
          (
            item.firstName +
            item.lastName +
            item.city +
            item.country +
            item.email +
            item.phoneNumber +
            item.website
          )
            .toLowerCase()
            .includes(action.text.trim().replace(/\s+/g, "").toLowerCase())
        );
        return {
          ...state,
          sort: null,
          sortedContacts: find,
          search: action.text,
        };
      }
      return {
        ...state,
        sort: null,
        sortedContacts: null,
        search: action.text,
      };
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
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleIsFav = (id) => {
  return {
    type: TOGGLE_IS_FAV,
    id,
  };
};
export const setSort = (sort) => {
  return {
    type: SET_SORT,
    sort,
  };
};
export const setSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    text,
  };
};
export default contactsReducer;
