import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
}));

function RootContent(props) {

    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Container maxWidth={props.contentWidth} className={styles.root}>
                { props.children }
            </Container>
        </div>
    );

}

RootContent.propTypes = {
    contentWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
};

RootContent.defaultProps = {
    contentWidth: 'md'
};

export default RootContent;