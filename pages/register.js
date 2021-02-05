import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import AnimateSlider from '../components/AnimateSlider';
import Feature from '../components/Feature';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Notification from '../components/Notification';
import brand from '../public/text/brand';
import Blogs from './blog';
import Register from '../components/Forms/Register';

const sectionMargin = margin => (margin * 15);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  containerWrap: {
    marginTop: theme.spacing(15)
  },
}));

function RegisterPage(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
            <Register />
         </main>
           <Hidden mdDown>
          <PageNav />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common', Blogs],
});

RegisterPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,   
  onToggleDir: PropTypes.func.isRequired,
};


export default RegisterPage;
