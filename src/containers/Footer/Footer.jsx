import React from 'react';
import { useTranslation } from 'react-i18next';
import facebook from '../../assets/img/social/facebook.png';
import insta from '../../assets/img/social/instagram.png';
import fImg from '../../assets/img/footer.png';
import styles from './styles.module.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className={styles.follow}>
        <span>{t('Foot.1')}</span>
        <a
          href="https://www.facebook.com/Leuloukraine-100773991516551/?modal=admin_todo_tour"
          target="blank"
        >
          <img src={facebook} alt="facebook" width="20px" />
        </a>
        <a
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img src={insta} alt="instagram" width="20px" />
        </a>
      </div>
      <div className={styles.privacy}>
        <img src={fImg} alt="img" className={styles.imgPr} />
      </div>
      <div className={styles.textFoo}>
        <p>{t('Foot.2')}</p>
      </div>
    </footer>
  );
}

export default Footer;
