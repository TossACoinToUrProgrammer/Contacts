import React from "react";
import SignUp from "./Signup";

let Profile = ({ newContact, setNewContact, setContacts, contacts }) => {
  let ava=React.createRef();
  let avaField=React.createRef();
  let redHeart = (
    <svg
      onClick={()=>setNewContact({...newContact, isFavourite:false})}
      width="70"
      height="66"
      viewBox="0 0 70 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 65.2L30.1 60.3C11.9 44.2 0 33.35 0 20.05C0 9.19996 8.4 0.799957 19.25 0.799957C25.2 0.799957 31.15 3.59996 35 8.14996C38.85 3.59996 44.8 0.799957 50.75 0.799957C61.6 0.799957 70 9.19996 70 20.05C70 33.35 58.1 44.2 39.9 60.3L35 65.2Z"
        fill="#D32F2F"
      />
    </svg>
  );
  let grayHeart=(
    <svg
      onClick={()=>setNewContact({...newContact, isFavourite:true})}
      width="70"
      height="66"
      viewBox="0 0 70 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 65.2L30.1 60.3C11.9 44.2 0 33.35 0 20.05C0 9.19996 8.4 0.799957 19.25 0.799957C25.2 0.799957 31.15 3.59996 35 8.14996C38.85 3.59996 44.8 0.799957 50.75 0.799957C61.6 0.799957 70 9.19996 70 20.05C70 33.35 58.1 44.2 39.9 60.3L35 65.2Z"
        fill="#dddddd"
      />
    </svg>
  );
  return (
   <div className="profile__container">
      <div className="profile">
        <img ref={ava} onClick={()=>{avaField.current.style="display:block"; ava.current.style="display:none"}} src={newContact.image} alt="ava" className="profile__img" />
        <input ref={avaField} className="signup__input-ava" placeholder="Enter the url..." type="text"/>
        {newContact.isFavourite? redHeart:grayHeart}
        <SignUp ava={{ava, avaField}}  profiles={contacts} profile={newContact} setContacts={setContacts}/>
      </div>
   </div>
  );
};

export default Profile;
