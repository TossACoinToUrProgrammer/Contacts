import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {setProfiles, setProfile, setNewContact } from '../../redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import Header from '../Header'
import Preloader from '../Preloader';

let ProfileContainer=(props)=>{

    let check;
    if(props.contact!==null){
        check=props.contact.id;
    }
    useEffect(() => {
        props.setProfiles(JSON.parse(localStorage.getItem("contacts")));
        let id = props.match.params.userId;
        let contact=JSON.parse(localStorage.getItem("contacts")).filter(item=>item.id==id)[0];
        props.setProfile(contact);
      }, [check]); 
      if(props.contact!==null && props.contacts!==null){
    return (
        <div>
            <Header/>
            <Profile contacts={props.contacts} newContact={props.newContact} setNewContact={props.setNewContact} contact={props.contact} setContacts={props.setProfiles} setContact={props.setProfile} />
        </div>
    )}
    else{
        return (
            <div>
                <Header />
                <Preloader />
            </div>
        )
    }
}


let mapStateToProps=(state)=>{
    return {
        contacts:state.profilePage.contacts,
        contact:state.profilePage.contact,
        newContact:state.profilePage.newContact,
    }
}

export default connect(mapStateToProps, { setProfile, setProfiles, setNewContact })(withRouter(ProfileContainer));