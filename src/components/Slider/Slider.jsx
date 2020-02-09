import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import styles from './styles.module.css';
import model from '../../assets/img/model.png';
import slide2 from '../../assets/img/2.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider
    className={styles.sl}
    fillParent={false}
    play
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    timerHeight="0px"
  >
    <div data-src={model} />
    <div data-src="https://static.wixstatic.com/media/5bd4e0_3f246696a5d34bf38e08abe6b6a81502~mv2_d_1900_1266_s_2.jpg/v1/fill/w_1900,h_765,al_c,q_85/5bd4e0_3f246696a5d34bf38e08abe6b6a81502~mv2_d_1900_1266_s_2.webp" />
    <div data-src={slide2} />
  </AutoplaySlider>
);

export default Slider;
