import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className={styles.follow}>
        <span>{t('Foot.1')}</span>
        <a href="/" target="blank">
          <img
            src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
            alt="facebook"
          />
        </a>
        <a
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img
            src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
            alt="instagram"
          />
        </a>
      </div>
      <div className={styles.privacy}>
        <img
          src="https://static.wixstatic.com/media/5bd4e0_b2a140a72d904132b9bdbea0a3823d50~mv2.png/v1/fill/w_246,h_55,al_c,q_85,usm_0.66_1.00_0.01/5bd4e0_b2a140a72d904132b9bdbea0a3823d50~mv2.webp"
          alt="img"
        />
      </div>
      <div className={styles.textFoo}>
        <p>{t('Foot.2')}</p>
      </div>
    </footer>
  );
}

export default Footer;
