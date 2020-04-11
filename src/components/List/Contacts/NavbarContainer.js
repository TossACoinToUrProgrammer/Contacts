import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { setSort } from '../../../redux/contacts-reducer'

const NavbarContainer=(props)=>{
    return(
        <div>
            <Navbar sort={props.sort} setSort={props.setSort} />
        </div>
    )
};
let mapStateToProps=(state)=>{
    return {
        sort:state.contactsPage.sort
    };
};
export default connect(mapStateToProps,{setSort})(NavbarContainer);

