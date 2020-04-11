import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setContacts,
  toggleIsFetching,
  toggleIsFav,
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
  });
  return (
    <div className="contacts">
      {props.isFetching ? <Preloader /> : null}
      <Contacts toggleIsFav={props.toggleIsFav} contacts={props.contacts} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    contacts: state.contactsPage.contacts,
    isFetching: state.contactsPage.isFetching,
    sort: state.contactsPage.sort,
  };
};
export default connect(mapStateToProps, {
  setContacts,
  toggleIsFetching,
  toggleIsFav,
})(ContactsContainer);
