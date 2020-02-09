import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Translate from '../Translate/Translate';

const MobileNav = ({ t, closeMenu }) => {
  return (
    <>
      <Translate />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/science">
              {t('Navigation.1')}
            </NavLink>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/products">
              {t('Navigation.2')}
            </NavLink>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/contact-us">
              {t('Navigation.3')}
            </NavLink>
          </button>
        </li>
      </ul>
      <div className={styles.social}>
        <a href="/" target="blank">
          <img
            className={styles.socialImg}
            src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
            alt="facebook"
          />
        </a>
        <a
          href="/https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img
            className={styles.socialImg}
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
            alt="instagram"
          />
        </a>
      </div>
    </>
  );
};

export default withTranslation()(MobileNav);

MobileNav.propTypes = {
  t: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
