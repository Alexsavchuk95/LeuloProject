import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const social = {
  padding: '5px 0px',
};

const tr = {
  display: 'flex',
  width: '100px',
  justifyContent: 'space-between',
};

function Nav() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <ul className={styles.navigation}>
      <div style={tr} className={styles.listItem}>
        <div>
          <button
            className={styles.transBut}
            onClick={() => handleClick('ru')}
            type="button"
          >
            Рус
          </button>
        </div>
        <span className={styles.sp}>|</span>
        <div>
          <button
            className={styles.transBut}
            onClick={() => handleClick('ua')}
            type="button"
          >
            Укр
          </button>
        </div>
      </div>
      <li className={styles.listItem}>
        <NavLink to="/science">{t('Navigation.1')}</NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/products">{t('Navigation.2')}</NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/contact-us">{t('Navigation.3')}</NavLink>
      </li>
      <div className={styles.social}>
        <a href="/" target="blank">
          <img
            style={social}
            src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
            alt="facebook"
          />
        </a>
        <a
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img
            style={social}
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
            alt="instagram"
          />
        </a>
      </div>
    </ul>
  );
}

export default Nav;
