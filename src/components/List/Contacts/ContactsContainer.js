import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setContacts,
  toggleIsFetching,
  toggleIsFav,
  setSort, setSearchText 
} from "../../../redux/contacts-reducer";
import Contacts from "./Contacts";
import axios from "axios";
import Preloader from "../../Preloader";

let ContactsContainer = (props) => {
  useEffect(() => {
    if (props.contacts === null && !localStorage.getItem("contacts")) {
      props.toggleIsFetching(true);
      axios
        .get(
          "https://my-json-server.typicode.com/RomanChasovitin/demo-api/users"
        )
        .then((response) => {
          localStorage.setItem(
            "contacts",
            JSON.stringify(
              response.data.data.map((item) => ({
                ...item,
                isFavourite: false,
              }))
            )
          );
          props.setContacts(JSON.parse(localStorage.getItem("contacts")));
          props.toggleIsFetching(false);
        });
    } else if (!props.contacts) {
      props.setContacts(JSON.parse(localStorage.getItem("contacts")));
    } 
    else{
    let sorted1=[...props.contacts];
    let sorted2=[...JSON.parse(localStorage.getItem("contacts"))];
    if (    //Перерисовываем если в страничке профиля производились какие то изменения, чтобы отобразить актуальную инфу
      JSON.stringify(
        sorted1.sort((prev, next) => {
          if (prev.firstName < next.firstName) return -1;
          return 0;
        })
      ) !==
      JSON.stringify(sorted2.sort((prev, next) => {
        if (prev.firstName < next.firstName) return -1;
        return 0;
      })) 
    ) {
      props.setContacts(JSON.parse(localStorage.getItem("contacts")));
      props.setSort(null);
      props.setSearchText("");
    }
  }});
  return (
    <div className="contacts">
      {props.isFetching ? <Preloader /> : null}
      <Contacts toggleIsFav={props.toggleIsFav} contacts={!props.sortedContacts? props.contacts : props.sortedContacts} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    contacts: state.contactsPage.contacts,
    isFetching: state.contactsPage.isFetching,
    sort: state.contactsPage.sort,
    sortedContacts:state.contactsPage.sortedContacts,
  };
};
export default connect(mapStateToProps, {
  setContacts,
  toggleIsFetching,
  toggleIsFav,
  setSort,
  setSearchText
})(ContactsContainer);
