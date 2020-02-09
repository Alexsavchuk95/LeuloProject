import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const dew = {
  background: '#D0AA6C',
};

class Science extends Component {
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false,
    modalIsOpen3: false,
    modalIsOpen4: false,
    modalIsOpen5: false,
    modalIsOpen6: false,
    modalIsOpen7: false,
    modalIsOpen8: false,
    modalIsOpen9: false,
    modalIsOpen10: false,
    modalIsOpen11: false,
    modalIsOpen12: false,
    modalIsOpen13: false,
    modalIsOpen14: false,
    modalIsOpen15: false,
    modalIsOpen16: false,
    modalIsOpen17: false,
    modalIsOpen19: false,
    modalIsOpen21: false,
    modalIsOpen22: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

  openModal3 = () => {
    this.setState({ modalIsOpen3: true });
  };

  closeModal3 = () => {
    this.setState({ modalIsOpen3: false });
  };

  openModal4 = () => {
    this.setState({ modalIsOpen4: true });
  };

  closeModal4 = () => {
    this.setState({ modalIsOpen4: false });
  };

  openModal5 = () => {
    this.setState({ modalIsOpen5: true });
  };

  closeModal5 = () => {
    this.setState({ modalIsOpen5: false });
  };

  openModal6 = () => {
    this.setState({ modalIsOpen6: true });
  };

  closeModal6 = () => {
    this.setState({ modalIsOpen6: false });
  };

  openModal7 = () => {
    this.setState({ modalIsOpen7: true });
  };

  closeModal7 = () => {
    this.setState({ modalIsOpen7: false });
  };

  openModal8 = () => {
    this.setState({ modalIsOpen8: true });
  };

  closeModal8 = () => {
    this.setState({ modalIsOpen8: false });
  };

  openModal9 = () => {
    this.setState({ modalIsOpen9: true });
  };

  closeModal9 = () => {
    this.setState({ modalIsOpen9: false });
  };

  openModal10 = () => {
    this.setState({ modalIsOpen10: true });
  };

  closeModal10 = () => {
    this.setState({ modalIsOpen10: false });
  };

  openModal11 = () => {
    this.setState({ modalIsOpen11: true });
  };

  closeModal11 = () => {
    this.setState({ modalIsOpen11: false });
  };

  openModal12 = () => {
    this.setState({ modalIsOpen12: true });
  };

  closeModal12 = () => {
    this.setState({ modalIsOpen12: false });
  };

  openModal13 = () => {
    this.setState({ modalIsOpen13: true });
  };

  closeModal13 = () => {
    this.setState({ modalIsOpen13: false });
  };

  openModal14 = () => {
    this.setState({ modalIsOpen14: true });
  };

  closeModal14 = () => {
    this.setState({ modalIsOpen14: false });
  };

  openModal15 = () => {
    this.setState({ modalIsOpen15: true });
  };

  closeModal15 = () => {
    this.setState({ modalIsOpen15: false });
  };

  openModal16 = () => {
    this.setState({ modalIsOpen16: true });
  };

  closeModal16 = () => {
    this.setState({ modalIsOpen16: false });
  };

  openModal17 = () => {
    this.setState({ modalIsOpen17: true });
  };

  closeModal17 = () => {
    this.setState({ modalIsOpen17: false });
  };

  openModal19 = () => {
    this.setState({ modalIsOpen19: true });
  };

  closeModal19 = () => {
    this.setState({ modalIsOpen19: false });
  };

  openModal21 = () => {
    this.setState({ modalIsOpen21: true });
  };

  closeModal21 = () => {
    this.setState({ modalIsOpen21: false });
  };

  openModal22 = () => {
    this.setState({ modalIsOpen22: true });
  };

  closeModal22 = () => {
    this.setState({ modalIsOpen22: false });
  };

  render() {
    const { t } = this.props;
    const {
      modalIsOpen,
      secondModalIsOpen,
      modalIsOpen3,
      modalIsOpen4,
      modalIsOpen5,
      modalIsOpen6,
      modalIsOpen7,
      modalIsOpen8,
      modalIsOpen9,
      modalIsOpen10,
      modalIsOpen11,
      modalIsOpen12,
      modalIsOpen13,
      modalIsOpen14,
      modalIsOpen15,
      modalIsOpen16,
      modalIsOpen17,
      modalIsOpen19,
      modalIsOpen21,
      modalIsOpen22,
    } = this.state;
    return (
      <>
        <section className={styles.wrapper}>
          <h2 className={styles.titleSc}>Bounce Back Blend</h2>
          <div className={styles.containerVit}>
            <div className={styles.bottleCont}>
              <ul className={styles.list}>
                <h3 className={styles.bottleTitle}>{t('Science.1')}</h3>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.2')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.3')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.4')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.5')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.6')}</p>
                </li>
                <li className={styles.listItem}>
                  <p className={styles.text}>{t('Science.7')}</p>
                </li>
              </ul>
              <img
                className={styles.bottleImg}
                src="https://static.wixstatic.com/media/5bd4e0_d17d441e93304fda9e96aaa09b53906d~mv2.png/v1/fill/w_180,h_315,al_c,q_85,usm_0.66_1.00_0.01/Bounce%20back%20blend.webp"
                alt=""
              />
            </div>
            <div>
              <ul className={styles.vitList}>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.1')}</span>
                  <div>
                    <button onClick={this.openModal} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_88420b939dd54975999633fde5e58c4a~mv2.png/v1/fill/w_118,h_118,al_c,q_85,usm_0.66_1.00_0.01/orange.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      onRequestClose={this.closeModal}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.1')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.1')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.2')}</span>
                  <div>
                    {/* DOING MODAL */}
                    <button onClick={this.openSecondModal} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_f3755dcb6e9049feaa7587e92e927e9c~mv2.png/v1/fill/w_109,h_109,al_c,q_85,usm_0.66_1.00_0.01/gel.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={secondModalIsOpen}
                      onRequestClose={this.closeSecondModal}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeSecondModal}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.2')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.2')}</p>
                      </div>
                    </Modal>
                    {/* -------------------- */}
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.3')}</span>
                  <div>
                    <button onClick={this.openModal3} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_36127ad9509944eaa33b0d4c4a5ec363~mv2.png/v1/fill/w_113,h_113,al_c,q_85,usm_0.66_1.00_0.01/fresa.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen3}
                      onRequestClose={this.closeModal3}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal3}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.3')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.3')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.4')}</span>
                  <div>
                    <button onClick={this.openModal4} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_565766f6d6d04fd3bc2f5c1f23a0d931~mv2.png/v1/fill/w_112,h_112,al_c,q_85,usm_0.66_1.00_0.01/aloe.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen4}
                      onRequestClose={this.closeModal4}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal4}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.4')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.4')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.5')}</span>
                  <div>
                    <button onClick={this.openModal5} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_eba27838e4484bfb9a5363ec8d8ebb19~mv2.png/v1/fill/w_107,h_105,al_c,q_85,usm_0.66_1.00_0.01/banana.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen5}
                      onRequestClose={this.closeModal5}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal5}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.5')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.5')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.6')}</span>
                  <div>
                    <button onClick={this.openModal6} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_ad46b5aad35841669fdf7276d32b7f0c~mv2.png/v1/fill/w_111,h_109,al_c,q_85,usm_0.66_1.00_0.01/aguacate.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen6}
                      onRequestClose={this.closeModal6}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal6}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.6')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.6')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.7')}</span>
                  <div>
                    <button onClick={this.openModal7} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_aea6edb83e6741e7874ff86c7e31688d~mv2.png/v1/fill/w_110,h_110,al_c,q_85,usm_0.66_1.00_0.01/lulo.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen7}
                      onRequestClose={this.closeModal7}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal7}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.7')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.7')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.8')}</span>
                  <div>
                    <button onClick={this.openModal8} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_16fcb5ea38bf4a2a9b5e8749f2e9dabf~mv2.png/v1/fill/w_115,h_115,al_c,q_85,usm_0.66_1.00_0.01/brocoli.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen8}
                      onRequestClose={this.closeModal8}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal8}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.8')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.8')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.9')}</span>
                  <div>
                    <button onClick={this.openModal9} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_b2c332c393374538a1be11e0e870d5a2~mv2.png/v1/fill/w_112,h_112,al_c,q_85,usm_0.66_1.00_0.01/tumeric.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen9}
                      onRequestClose={this.closeModal9}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal9}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.9')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.9')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.10')}</span>
                  <div>
                    <button onClick={this.openModal10} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_adbc8d32f84b4a41972fbbc3eff593d2~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01/ly.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen10}
                      onRequestClose={this.closeModal10}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal10}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.10')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.10')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.11')}</span>
                  <div>
                    <button onClick={this.openModal11} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_f2de186faa9c44a4ab1c8a510057c660~mv2.png/v1/fill/w_115,h_115,al_c,q_85,usm_0.66_1.00_0.01/grape.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen11}
                      onRequestClose={this.closeModal11}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal11}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.11')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.11')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.12')}</span>
                  <div>
                    <button onClick={this.openModal12} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_f7e8c5e48cb24763b7fcfb31bf691700~mv2.png/v1/fill/w_115,h_115,al_c,q_85,usm_0.66_1.00_0.01/mushroom.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen12}
                      onRequestClose={this.closeModal12}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal12}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.12')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.12')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.13')}</span>
                  <div>
                    <button onClick={this.openModal13} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_cd5a23df6cb24a4799d59da18a125afb~mv2.png/v1/fill/w_116,h_116,al_c,q_85,usm_0.66_1.00_0.01/greenbean.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen13}
                      onRequestClose={this.closeModal13}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal13}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.13')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.13')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.14')}</span>
                  <div>
                    <button onClick={this.openModal14} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_aff05a5de32f413098ac3ba843b0bb94~mv2.png/v1/fill/w_113,h_113,al_c,q_85,usm_0.66_1.00_0.01/greentea.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen14}
                      onRequestClose={this.closeModal14}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal14}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.14')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.14')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.15')}</span>
                  <div>
                    <button onClick={this.openModal15} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_89a6026e26574e95a57e80a0498d77da~mv2.png/v1/fill/w_107,h_107,al_c,q_85,usm_0.66_1.00_0.01/collagen.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen15}
                      onRequestClose={this.closeModal15}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal15}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.15')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.15')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li id={styles.vitL} className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.16')}</span>
                  <div>
                    <button onClick={this.openModal16} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_ff8b66c43f2c44e180ecdbef83cfa0bf~mv2.png/v1/fill/w_115,h_108,al_c,q_85,usm_0.66_1.00_0.01/guava.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen16}
                      onRequestClose={this.closeModal16}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal16}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.16')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.16')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.pos}>
            <h2 id={styles.titleD} className={styles.titleSc}>
              Dew Elixir
            </h2>
            <div className={styles.containerVit}>
              <div className={styles.bottleCont} style={dew}>
                <ul className={styles.list}>
                  <h3 className={styles.bottleTitle}>{t('Dew.1')}</h3>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.2')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.3')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.4')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.5')}</p>
                  </li>
                  <li className={styles.listItem}>
                    <p className={styles.text}>{t('Dew.6')}</p>
                  </li>
                </ul>
                <img
                  id={styles.Up}
                  className={styles.bottleImg}
                  src="https://static.wixstatic.com/media/5bd4e0_7eebd06f23344ea78ac0ab27eea35a39~mv2.png/v1/fill/w_185,h_355,al_c,q_85,usm_0.66_1.00_0.01/dew%20elixir.webp"
                  alt="Elixir"
                />
              </div>
              <ul className={styles.vitList} id={styles.viList}>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.17')}</span>
                  <div>
                    <button onClick={this.openModal17} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_75854abf8dc44b28810da6bd60e176f1~mv2.png/v1/fill/w_121,h_120,al_c,q_85,usm_0.66_1.00_0.01/b12.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen17}
                      onRequestClose={this.closeModal17}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal17}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.17')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.17')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.18')}</span>
                  <div>
                    <button onClick={this.openModal} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_88420b939dd54975999633fde5e58c4a~mv2.png/v1/fill/w_125,h_122,al_c,q_85,usm_0.66_1.00_0.01/orange.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      onRequestClose={this.closeModal}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.1')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.1')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.19')}</span>
                  <div>
                    <button onClick={this.openModal19} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_043010b489614080a4ba6c3cd7f4cc64~mv2.png/v1/fill/w_115,h_112,al_c,q_85,usm_0.66_1.00_0.01/garbanzos.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen19}
                      onRequestClose={this.closeModal19}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal19}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.19')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.19')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.20')}</span>
                  <div>
                    <button onClick={this.openModal8} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_16fcb5ea38bf4a2a9b5e8749f2e9dabf~mv2.png/v1/crop/x_0,y_0,w_300,h_287/fill/w_115,h_110,al_c,q_85,usm_0.66_1.00_0.01/brocoli.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen8}
                      onRequestClose={this.closeModal8}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal8}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.8')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.8')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.21')}</span>
                  <div>
                    <button onClick={this.openModal21} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_c38d45197f9f4a729338732d8aaaea74~mv2.png/v1/fill/w_105,h_109,al_c,q_85,usm_0.66_1.00_0.01/wheat.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen21}
                      onRequestClose={this.closeModal21}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal21}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.21')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.21')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
                <li className={styles.itemVit}>
                  <span className={styles.vitaText}>{t('Vitamin.22')}</span>
                  <div>
                    <button onClick={this.openModal22} type="button">
                      <img
                        className={styles.vitaImg}
                        src="https://static.wixstatic.com/media/5bd4e0_7baff944eb7449f69227e7392464244a~mv2.png/v1/fill/w_112,h_109,al_c,q_85,usm_0.66_1.00_0.01/oil.webp"
                        alt="vitamine"
                      />
                    </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen22}
                      onRequestClose={this.closeModal22}
                      className={styles.mod}
                      contentLabel="Vitamin"
                    >
                      <div className={styles.modCont}>
                        <button
                          className={styles.btn}
                          type="button"
                          onClick={this.closeModal22}
                        >
                          <span className={styles.close} />
                        </button>
                      </div>
                      <div className={styles.modCon}>
                        <h3 className={styles.modTitle}>{t('Vitamin.22')}</h3>
                        <p className={styles.modText}>{t('VitaminInfo.22')}</p>
                      </div>
                    </Modal>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default withTranslation()(Science);

Science.propTypes = {
  t: PropTypes.func.isRequired,
};
