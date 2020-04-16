import React from "react";
import ContactCard from "./ContactCard";
import NavbarContainer from "./NavbarContainer";

const Contacts = (props) => {
  let contacts;
  if (props.contacts != null) {
    contacts = props.contacts.map((item) => (
      <ContactCard
        contact={item}
        key={item.id}
        toggleIsFav={props.toggleIsFav}
      />
    ));
  }
  return (
  <div>
      <NavbarContainer />
      <div className="contacts__list">
        {contacts}
      </div>
  </div>
  );
};

export default Contacts;
