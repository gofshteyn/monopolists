import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid, Typography, Link, Tooltip, IconButton } from '@material-ui/core';
import { cyan, grey } from '@material-ui/core/colors';
import { AlternateEmail, Facebook, YouTube } from '@material-ui/icons';

import { Link as RouterLink } from 'react-router-dom';

import RootContent from '../../containers/RootContent';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: cyan[700],
        color: grey[200],
        padding: theme.spacing(1),
        borderTopLeftRadius: theme.spacing(1),
        borderTopRightRadius: theme.spacing(1)
    },
    logo: {
        fill: grey[200]
    }
}));

function Footer(props) {

    const styles = useStyles();

    return (
        <RootContent>
            <footer className={styles.root}>
                <Grid container spacing={0}>
                    <Grid item xs={5} style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                        <svg height="50" viewBox="0 0 500 500" width="50" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
                            <path d="M111.02 54.95c4.73-13.92 9.11-27.95 14.08-41.78 3.08 1.26 3.81 4.76 5.31 7.4 38.74 77.58 77.54 155.14 116.27 232.73.86 1.78 2.05 3.36 3.32 4.87 2.01-2.22 3.41-4.88 4.68-7.57 37.95-76 75.92-151.99 113.91-227.98 1.71-3.22 2.92-6.79 5.43-9.51 1.39 1.11 1.97 2.82 2.53 4.44 34.23 103.05 68.61 206.05 102.93 309.07 5.05 16.14 10.48 32.16 15.84 48.2 1.01 2.98 2.25 5.88 3.52 8.75-19.49 9.8-38.37 20.78-56.62 32.72-15.73 10.23-30.62 21.73-44.4 34.46-1.24-1.39-2.24-2.98-2.56-4.83-11.77-46.96-23.67-93.89-35.48-140.85-2.07-7.48-3.4-15.19-6.05-22.5-1.04.95-2.09 1.93-2.7 3.23-31.46 62.95-62.9 125.93-94.38 188.88-1.91 3.59-3.35 7.48-5.76 10.78-2.15.77-2.79-1.58-3.66-2.99-31.75-63.53-63.47-127.07-95.23-190.6-1.57-3.01-2.78-6.27-4.94-8.93-1.64.51-1.77 2.38-2.24 3.76-12.92 51.67-26.07 103.28-39 154.95-.85 3.15-1.23 6.67-3.63 9.12-25.28-23.66-54.86-42.1-85-58.87-5.29-3.06-11.04-5.28-16.1-8.74 8.9-25.05 16.84-50.44 25.44-75.61 7.67-20.98 14.28-42.32 21.49-63.46 21-63.05 42.05-126.08 63-189.14z" />
                        </svg>
                        <div style={{marginLeft: '15px'}}>
                            <Typography variant="h5">Монополисты</Typography>
                            <Typography variant="subtitle2">Экономическая online игра!</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6">Материалы</Typography>
                        <li><Link color="inherit" to="/help" component={RouterLink}>Руководство по игре</Link></li>
                        <li><Link color="inherit" to="/articles" component={RouterLink}>Статьи</Link></li>
                        <li><Link color="inherit" to="/contacts" component={RouterLink}>Контакты</Link></li>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6">Мы в сетях</Typography>
                        <Grid container justify="center">
                            <Tooltip title="Facebook" arrow>
                                <IconButton color="inherit">
                                    <Facebook fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="YouTube" arrow>
                                <IconButton color="inherit">
                                    <YouTube fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Электронная почта" arrow>
                                <IconButton color="inherit">
                                    <AlternateEmail fontSize="large" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        </RootContent>
    );

}

Footer.propTypes = {
    contentWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
};

Footer.defaultProps = {
    contentWidth: 'md'
};

export default Footer;