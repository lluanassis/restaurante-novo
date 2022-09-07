import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h2 className="headtext__cormorant">Sobre</h2>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, officiis blanditiis aperiam perferendis dignissimos eos quos nihil! Ipsa rerum, at aperiam eveniet cum similique fuga consequuntur. Laudantium optio placeat maxime?</p>
        <button type='button' className='custom__button'>Saiba Mais</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt='about_knife'/>
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Nossa História</h2>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, officiis blanditiis aperiam perferendis dignissimos eos quos nihil! Ipsa rerum, at aperiam eveniet cum similique fuga consequuntur. Laudantium optio placeat maxime?</p>
        <button type='button' className='custom__button'>Saiba Mais</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
