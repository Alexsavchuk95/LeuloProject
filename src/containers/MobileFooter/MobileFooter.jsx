import React from 'react';
import { useTranslation } from 'react-i18next';
import facebook from '../../assets/img/social/facebook.png';
import insta from '../../assets/img/social/instagram.png';
import fImg from '../../assets/img/footer.png';
import styles from './styles.module.css';

function MobileFooter() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className={styles.privacy}>
        <img className={styles.privImg} src={fImg} alt="img" />
      </div>
      <div className={styles.follow}>
        <a
          className={styles.link}
          href="https://www.facebook.com/Leuloukraine-100773991516551/?modal=admin_todo_tour"
          target="blank"
        >
          <img className={styles.imgM} src={facebook} alt="facebook" />
        </a>
        <a
          className={styles.link}
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img className={styles.imgM} src={insta} alt="instagram" />
        </a>
      </div>
      <div className={styles.textFoo}>
        <p>{t('Foot.2')}</p>
      </div>
    </footer>
  );
}

export default MobileFooter;
