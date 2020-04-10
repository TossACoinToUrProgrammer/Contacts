import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setContacts, toggleIsFetching } from "../../../redux/contacts-reducer";
import Contacts from "./Contacts";
import axios from "axios";
import Preloader from "../../Preloader";

let ContactsContainer = (props) => {
  useEffect(() => {
    if (props.contacts===null) {
      props.toggleIsFetching(true);
      axios
        .get(
          "https://my-json-server.typicode.com/RomanChasovitin/demo-api/users"
        )
        .then((response) => {
          props.setContacts(response.data.data);
          props.toggleIsFetching(false);
        });
    }
  });
  return (
    <div className="contacts">
      {props.isFetching ? <Preloader /> : null}
      <Contacts contacts={props.contacts} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    contacts: state.contactsPage.contacts,
    isFetching: state.contactsPage.isFetching,
  };
};
export default connect(mapStateToProps, { setContacts, toggleIsFetching })(
  ContactsContainer
);
