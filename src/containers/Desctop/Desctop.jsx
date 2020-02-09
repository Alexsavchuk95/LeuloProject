import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../../components/HomePage/HomePage';
import Footer from '../Footer/Footer';
import Science from '../../components/Science/Science';
import Products from '../../components/Products/Products';
import Contact from '../../components/Contact/Contact';
import styles from './styles.module.css';

const Desctop = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/science" component={Science} />
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default Desctop;
