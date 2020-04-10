import React from "react";
import ContactCard from "./ContactCard";

const Contacts = (props) => {
  let contacts;
  if (props.contacts != null) {
    contacts = props.contacts.map((item) => (
      <ContactCard contact={item} key={item.id} />
    ));
  }
  return <div className="contacts__list">{contacts}</div>;
};

export default Contacts;
