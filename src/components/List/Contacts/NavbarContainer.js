import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { setSort, setSearchText } from '../../../redux/contacts-reducer'

const NavbarContainer=(props)=>{
    return(
        <div>
            <Navbar setSearchText={props.setSearchText} search={props.search} sort={props.sort} setSort={props.setSort} />
        </div>
    )
};
let mapStateToProps=(state)=>{
    return {
        sort:state.contactsPage.sort,
        search:state.contactsPage.search,
    };
};

export default connect(mapStateToProps,{setSort, setSearchText})(NavbarContainer);

