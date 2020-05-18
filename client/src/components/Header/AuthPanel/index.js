import React, { Fragment, useState } from 'react';
import { Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

function AuthPanel (props) {

    const [ isOpenedAuthDialog, setIsOpenedAuthDialog ] = useState(false);

    const onCloseAuthDialog = () => {
        setIsOpenedAuthDialog(false);
    }

    return (
        <Fragment>
            <Button color="inherit" startIcon={ <AccountCircle /> } onClick={() => (setIsOpenedAuthDialog(true))}>Вход / регистрация</Button>
            {/* <AuthDialog open={isOpenedAuthDialog} onClose={onCloseAuthDialog} /> */}
        </Fragment>
    );
}

export default AuthPanel;