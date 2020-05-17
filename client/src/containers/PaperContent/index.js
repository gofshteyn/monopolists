import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        // marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '100%'
    }
}));

function PaperContent(props) {

    const styles = useStyles();

    return (
        <Paper className={styles.root}>
            { props.children }
        </Paper>
    );

}

export default PaperContent;