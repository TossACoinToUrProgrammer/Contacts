import React from "react";
import Header from "../Header";
import ContactsContainer from "./Contacts/ContactsContainer";

let List = (props) => {
  return (
    <div>
      <Header />
      <ContactsContainer />
    </div>
  );
};

export default List;
