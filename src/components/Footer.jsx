import React, { Component } from 'react';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
    render() {
      return (
        <footer className='footer'>
            <div className='about-social' id="about"><a href="https://wa.me/5524999252710" target='_blank'><div className='service-icon'><FontAwesomeIcon icon={faWhatsapp} style={{color: "#69E4D2",}} /></div></a>
                  <a href="https://www.linkedin.com/in/hatusalbertassi/" target='_blank'><div className='service-icon'><FontAwesomeIcon icon={faLinkedin} style={{color: "#69E4D2",}} /></div></a>
                  <a href="https://github.com/albertassihatus" target='_blank'><div className='service-icon'><FontAwesomeIcon icon={faGithub} style={{color: "#69E4D2",}} /></div></a>
                </div>
        </footer>
      );
    }
  }