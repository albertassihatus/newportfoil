import React, { Component } from 'react';
import '../styles/desktop.css'
import logo from '../assets/logo-ha.svg';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header-logo'>
            <a href="https://www.linkedin.com/in/hatusalbertassi/" target="_blank">
                <img src={logo} alt="logo" />
                <p>Hatus Albertassi</p>
            </a>
        </div>
        <div className='btn-menu'>
            <ul>
              <a href="/"><li>HOME</li></a>
              <a href="#about"><li>SOBRE</li></a>
              <a href="#resume"><li>RESUMO</li></a>
              <a href="#portfoil"><li>PORTFOLIO</li></a>
              <a href="#contact"><li>CONTATO</li></a>
            </ul>
            <div class="dropdown">
            <button class="dropbtn">Download CV</button>
            <div class="dropdown-content">
              <a href="https://drive.google.com/file/d/1aME6PWbkOQAgJFyLnrj7DXNOpXy9Pc-7/view?usp=sharing" target='_blank'>Português</a>
              <a href="https://drive.google.com/file/d/1E_AK6QRSrfh5HdI6dp7EHmOSUfZL2YoV/view?usp=sharing" target="_blank">Inglês</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}