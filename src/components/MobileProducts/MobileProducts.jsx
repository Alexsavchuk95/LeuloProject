import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

function MobileProducts() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapperPr}>
      <div className={styles.containerPr}>
        <div className={styles.bounceCont}>
          <img
            id={styles.green}
            className={styles.anImg}
            src="https://static.wixstatic.com/media/5bd4e0_1c5c3e0852224f8fab44db7f391378b9~mv2.png/v1/fill/w_228,h_175,al_c,q_85,usm_0.66_1.00_0.01/brocoli.webp"
            alt=""
          />
          <img
            id={styles.orange}
            className={styles.anImg}
            src="https://static.wixstatic.com/media/5bd4e0_0ffd1f5000264c0b9e88fe0809fa95fb~mv2.png/v1/fill/w_165,h_165,al_c,q_85,usm_0.66_1.00_0.01/vitaminc.webp"
            alt=""
          />
          <img
            id={styles.bottle}
            src="https://static.wixstatic.com/media/5bd4e0_d17d441e93304fda9e96aaa09b53906d~mv2.png/v1/fill/w_268,h_514,al_c,q_85,usm_0.66_1.00_0.01/Bounce%20back%20blend.webp"
            alt=""
          />
        </div>
        <div className={styles.about}>
          <h3 className={styles.title}>Bounce Back Blend</h3>
          <span className={styles.undTitle}>{t('Products.1')}</span>
          <p className={styles.text}>{t('Products.2')}</p>
        </div>
      </div>
      <div className={styles.containerPr}>
        <div className={styles.about}>
          <h3 className={styles.title}>Dew Elixir</h3>
          <span className={styles.undTitle}>{t('Products.3')}</span>
          <p className={styles.text}>{t('Products.4')}</p>
        </div>
        <div className={styles.bounceCont}>
          <img
            id={styles.kivi}
            className={styles.anImg}
            src="https://static.wixstatic.com/media/5bd4e0_fb923f1a35354cd3ad0b22c75851f6d1~mv2.png/v1/fill/w_289,h_205,al_c,q_85,usm_0.66_1.00_0.01/kiwi.webp"
            alt=""
          />
          <img
            id={styles.red}
            className={styles.anImg}
            src="https://static.wixstatic.com/media/5bd4e0_b6d52a724c904bd2805c80cc14d1c49c~mv2.png/v1/fill/w_274,h_154,al_c,q_85,usm_0.66_1.00_0.01/B12.webp"
            alt=""
          />
          <img
            id={styles.dewBtl}
            src="https://static.wixstatic.com/media/5bd4e0_7eebd06f23344ea78ac0ab27eea35a39~mv2.png/v1/fill/w_210,h_416,al_c,q_85,usm_0.66_1.00_0.01/dew%20elixir.webp"
            alt=""
          />
        </div>
      </div>
      <div className={styles.infPr}>
        <span className={styles.infText}>{t('Products.5')}</span>
        <span className={styles.infText}>{t('Products.6')}</span>
        <span className={styles.infText}>{t('Products.7')}</span>
      </div>
    </section>
  );
}

export default MobileProducts;
