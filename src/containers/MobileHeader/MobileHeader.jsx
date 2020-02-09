import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import Menu from '../../components/Hamburger/Menu';

const im = {
  width: '82px',
};

const logo =
  'https://static.wixstatic.com/media/5bd4e0_b4f4482bbc08402cbd8a6b0e30760e7f~mv2.png/v1/fill/w_162,h_46,al_c,q_85,usm_0.66_1.00_0.01/LEULO%20LOGO.webp';

const MobileHeader = () => (
  <>
    <header className={styles.headerDes}>
      <NavLink className={styles.logo} to="/">
        <img style={im} src={logo} alt="logo" />
      </NavLink>
      <Menu />
    </header>
  </>
);

export default MobileHeader;
