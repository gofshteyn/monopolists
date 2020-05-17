import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import RootContent from '../../containers/RootContent';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch'       // По вертикали
    }
}));

function Content () {

    const styles = useStyles();

    return (
        <RootContent>
            <main className={styles.root}>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </main>
        </RootContent>
    );
}

Content.propTypes = {
    contentWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
};

Content.defaultProps = {
    contentWidth: 'md'
};

export default Content;