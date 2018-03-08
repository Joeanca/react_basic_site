import React from 'react';
import { NavLink } from 'react-router-dom'

// This is the component which display an individual user item in the list displayed by the UserBrowser container
const UserListItem = (props)=> {
        let classes = "panel-block button  is-radiusless UserListItemBtn";
        return(
            <NavLink to={"/users/user/" + props.identifier} id={props.identifier} >
                <div className={classes}>
                   {props.children}
                </div>
            </NavLink>
        );
};

export default UserListItem;