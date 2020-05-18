import React from 'react';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import Footer from './components/Footer';
import UserPanel from './components/Header/UserPanel';

//import logo from './logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'stretch', // Выравнивание по вертикали
    alignItems: 'stretch'      // Выравнивание по горизонтали
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',  // Выравнивание по горизонтали
    alignItems: 'start'        // Выравнивание по вертикали
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'start'
  },
  content: {
    flexGrow: 1,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'start'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'start'
  }
}));

const state = {
  user: null
};

function App() {

  const styles = useStyles();
  document.body.style.backgroundColor = grey[200];
  document.body.style.color = grey[600];

  return (
    <div className={styles.root}>
      <div className={styles.header}><Header /></div>
      <div className={styles.navigation}><NavigationBar /></div>
      <div className={styles.content}><Content /></div>
      <div className={styles.footer}><Footer /></div>
    </div>
  );
}

export default App;
