import React, { Fragment, useState } from 'react';
//import { useHistory } from "react-router-dom";
import { Tooltip, IconButton, Avatar, Menu, MenuList, MenuItem, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
//import { useDispatch } from 'react-redux';
//import { logoutUser } from '../../../actions/userActions';

function UserPanel (props) {

    const [ anchorEl, setAnchorEl ] = useState(null);
    // const history = useHistory();
    // const dispatch = useDispatch();

    const onClickUserButton = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const onCloseMenu = (event) => {
        setAnchorEl(null);
    }

    const onClickUserProfileMenu = () => {
        //history.push('/userProfile');
        onCloseMenu();
    }

    const onClickUserLogoutMenu = () => {
        //dispatch(logoutUser());
        onCloseMenu();
    }

    return (
        <Fragment>
            <Tooltip title={props.user.hasOwnProperty('displayName') ? props.user.displayName : ''}>
                <IconButton onClick={onClickUserButton}>
                    <Avatar src={props.user.hasOwnProperty('avatar') ? props.user.avatar : null} />
                </IconButton>
            </Tooltip>
            <Menu open={Boolean(anchorEl)} onClose={onCloseMenu} anchorEl={anchorEl}>
                <MenuItem onClick={onClickUserProfileMenu}>
                    Профиль пользователя
                </MenuItem>
                <Divider />
                <MenuItem onClick={onClickUserLogoutMenu}>
                    Выход
                </MenuItem>
            </Menu>
        </Fragment>
    );

}

UserPanel.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserPanel;