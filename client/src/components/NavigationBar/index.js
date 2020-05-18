import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Breadcrumbs, Tooltip, Link } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import RootContent from '../../containers/RootContent';

import { Home } from '@material-ui/icons';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        color: grey[600],
        paddingLeft: theme.spacing(1)
    }
}));

function NavigationBar() {

    const styles = useStyles();

    return (
        <RootContent>
            <nav className={styles.root}>
                <Breadcrumbs>
                    <Tooltip title="Главная страница">
                        <Link color="inherit" to="/" component={RouterLink}><Home /></Link>
                    </Tooltip>
                </Breadcrumbs>
            </nav>
        </RootContent>
    );
}

NavigationBar.propTypes = {
    contentWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
};

NavigationBar.defaultProps = {
    contentWidth: 'md'
};

export default NavigationBar;