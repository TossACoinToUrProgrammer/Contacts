import React from "react";
import location from "../../../img/location.png";
import phone from "../../../img/smartphone.png";
import heart from "../../../img/heart.png";
import heart2 from "../../../img/heart2.png";
import inet from "../../../img/internet.png";
import email from "../../../img/email.png";
import { NavLink } from "react-router-dom";

const ContactCard = ({ contact, toggleIsFav }) => {
  return (
    <div className="card">
      <div className="card__img-container"><img src={contact.image} alt="ava" className="card__img" /></div>
      <div className="card__info">
        <div className="card__title">
          <h3 className="card__fullName">
            {contact.firstName} {contact.lastName}
          </h3>
          <div>
            {contact.isFavourite ? (
              <img
                onClick={() => toggleIsFav(contact.id)}
                src={heart2}
                className="card__fav"
                alt="fav"
              />
            ) : (
              <img
                onClick={() => toggleIsFav(contact.id)}
                src={heart}
                alt="fav"
              />
            )}
          </div>
        </div>
        <div className="card__info-mini">
          <span>
            <img src={location} alt="location" />
            {contact.city} city, {contact.country}
          </span>
          <span>
            <img src={phone} alt="phone" />
            {contact.phoneNumber}
          </span>
          <span>
            <img src={inet} alt="internet" />
            {contact.website}
          </span>
          <span>
            <img src={email} alt="email" />
            {contact.email}
          </span>
        </div>
          <NavLink to={"/profile/" + contact.id}>
        <div className="card__show-btn">
           show
        </div>
          </NavLink>
      </div>
    </div>
  );
};
export default ContactCard;
