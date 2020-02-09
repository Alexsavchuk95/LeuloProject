import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';
import styles from './styles.module.css';

const Header = () => (
  <>
    <header className={styles.headerDes}>
      <NavLink to="/">
        <img
          src="https://static.wixstatic.com/media/5bd4e0_b4f4482bbc08402cbd8a6b0e30760e7f~mv2.png/v1/fill/w_106,h_30,al_c,q_85,usm_0.66_1.00_0.01/LEULO%20LOGO.webp"
          alt="logo"
        />
      </NavLink>
      <Nav />
    </header>
  </>
);

export default Header;
