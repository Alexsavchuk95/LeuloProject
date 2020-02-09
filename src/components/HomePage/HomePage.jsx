import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

const supTitle = {
  fontSize: '27px',
  position: 'absolute',
  left: '270px',
  top: '160px',
};

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.slider}>
        <Slider />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img
              src="https://static.wixstatic.com/media/5bd4e0_4e647163cd6d4255a6619f51f1ef409d~mv2.png/v1/fill/w_47,h_47,al_c,q_85,usm_0.66_1.00_0.01/how.webp"
              alt="what is"
            />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.1')}</h3>
          <span className={styles.textList}>{t('HomePage.2')}</span>
        </li>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img
              src="https://static.wixstatic.com/media/5bd4e0_f506b7a727fb438eb9ee68ffd911f9d3~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01/whatis.webp"
              alt="what's in"
            />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.3')}</h3>
          <span className={styles.textList}>{t('HomePage.4')}</span>
        </li>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img
              src="https://static.wixstatic.com/media/5bd4e0_99781f80d0484bbc8ad8cc99ba530889~mv2.png/v1/fill/w_47,h_47,al_c,q_85,usm_0.66_1.00_0.01/WORKS.webp"
              alt="work"
            />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.5')}</h3>
          <span className={styles.textList}>{t('HomePage.6')}</span>
        </li>
      </ul>
      <div className={styles.container}>
        <div className={styles.supplements} />
        <h3 style={supTitle} className={styles.titleList}>
          {t('HomePage.7')}
        </h3>
        <span className={styles.supText}>{t('HomePage.8')}</span>
        <div className={styles.jars}>
          <img
            src="https://static.wixstatic.com/media/5bd4e0_d17d441e93304fda9e96aaa09b53906d~mv2.png/v1/fill/w_195,h_375,al_c,q_85,usm_0.66_1.00_0.01/Bounce%20back%20blend.webp"
            alt="jar"
          />
          <img
            src="https://static.wixstatic.com/media/5bd4e0_7eebd06f23344ea78ac0ab27eea35a39~mv2.png/v1/fill/w_195,h_375,al_c,q_85,usm_0.66_1.00_0.01/dew%20elixir.webp"
            alt="jar"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;