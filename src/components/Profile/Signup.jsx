import React from "react";
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "./BasicFormSchema";

const SignUp = ({ ava, profile, setContacts, profiles }) => {
  let addContact = (obj) => {
    if (obj.firstName === "") obj.firstName = profile.firstName;
    if (obj.lastName === "") obj.lastName = profile.lastName;
    if (obj.city === "") obj.city = profile.city;
    if (obj.country === "") obj.country = profile.country;
    if (obj.phoneNumber === "") obj.phoneNumber = profile.phoneNumber;
    if (obj.website === "") obj.website = profile.website;
    if (obj.email === "") obj.email = profile.email;
    obj.image = ava["avaField"].current.value;
    if (obj.image === "") obj.image = profile.image;
    let newObj = { ...profile, ...obj };
    let profilesClone = profiles;
    profilesClone = profilesClone.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    ava["ava"].current.style = "display:block";
    ava["avaField"].current.style = "display:none";
    localStorage.setItem("contacts", JSON.stringify(profilesClone));
    setContacts(profilesClone);
    document.querySelector(".signup__modal").style.display = "flex";
    setTimeout(
      () => (document.querySelector(".signup__modal").style.display = "none"),
      700
    );
  };
  if (profile) {
    return (
      <div>
        <Formik
          //инициализируем значения input-ов
          initialValues={{
            firstName: "",
            lastName: "",
            city: "",
            country: "",
            phoneNumber: "",
            website: "",
            email: "",
          }}
          //подключаем схему валидации, которую описали выше
          validationSchema={BasicFormSchema}
          //определяем, что будет происходить при вызове onsubmit
          onSubmit={(values) => {
            addContact(values);
          }}
          //свойство, где описывыем нашу форму
          //errors-ошибки валидации формы
          //touched-поля формы, которые мы "затронули",
          //то есть, в которых что-то ввели
          render={({ errors, touched }) => (
            <Form className="signup">
              <div className="signup__modal">Saved</div>

              <div className="signup__input">
                <label htmlFor="firstName">First Name:</label>
                <Field
                  name="firstName"
                  placeholder={profile.firstName}
                  type="text"
                  pattern="^[A-Za-zА-Яа-я]{2,20}$"
                />
                {errors.firstName && touched.firstName && (
                  <div className="field-error">{errors.firstName}</div>
                )}{" "}
              </div>

              <div className="signup__input">
                <label htmlFor="lastName">Last Name:</label>
                <Field
                  name="lastName"
                  placeholder={profile.lastName}
                  type="text"
                  pattern="^[A-Za-zА-Яа-я]{2,20}$"
                />

                {errors.lastName && touched.lastName && (
                  <div className="field-error">{errors.lastName}</div>
                )}
              </div>

              <div className="signup__input">
                <label htmlFor="city">City:</label>
                <Field
                  name="city"
                  placeholder={profile.city}
                  type="text"
                  pattern="^[A-Za-zА-Яа-я,-]{2,40}$"
                />

                {errors.city && touched.city && (
                  <div className="field-error">{errors.city}</div>
                )}
              </div>

              <div className="signup__input">
                <label htmlFor="country">Country:</label>
                <Field
                  name="country"
                  placeholder={profile.country}
                  type="text"
                  pattern="^[A-Za-zА-Яа-я\s,-]{2,40}$"
                />

                {errors.country && touched.country && (
                  <div className="field-error">{errors.country}</div>
                )}
              </div>

              <div className="signup__input">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Field
                  name="phoneNumber"
                  placeholder={profile.phoneNumber}
                  type="text"
                  pattern="^[0-9,+(\)]{2,20}$"
                />

                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="field-error">{errors.phoneNumber}</div>
                )}
              </div>

              <div className="signup__input">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder={profile.email} />
                {errors.email && touched.email && (
                  <div className="field-error">{errors.email}</div>
                )}
              </div>
              <div className="signup__input">
                <label htmlFor="website">Website:</label>
                <Field
                  name="website"
                  placeholder={profile.website}
                  type="text"
                  pattern="^[A-Za-z0-9,.]{2,20}.[a-z]{2,4}$"
                />

                {errors.website && touched.website && (
                  <div className="field-error">{errors.website}</div>
                )}
              </div>
              <button className="signup__button" type="submit">
                Save Contact
              </button>
            </Form>
          )}
        />
      </div>
    );
  } else {
    return <p>Err</p>;
  }
};

export default SignUp;
