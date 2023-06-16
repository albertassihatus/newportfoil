import React, { Component, useState } from 'react';
import logo from '../assets/logo-ha.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  handleMenuToggle = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="header">
        <div className="header-logo">
          <a href="https://www.linkedin.com/in/hatusalbertassi/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="logo" />
            <p>Hatus Albertassi</p>
          </a>
        </div>
        <div className="btn-menu">
          <ul>
            <a href="/"><li>HOME</li></a>
            <a href="#about"><li>SOBRE</li></a>
            <a href="#resume"><li>RESUMO</li></a>
            <a href="#portfolio"><li>PORTFOLIO</li></a>
            <a href="#contact"><li>CONTATO</li></a>
          </ul>
          <div className="dropdown">
            <button className="dropbtn">Download CV</button>
            <div className="dropdown-content">
              <a href="https://drive.google.com/file/d/1aME6PWbkOQAgJFyLnrj7DXNOpXy9Pc-7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Português</a>
              <a href="https://drive.google.com/file/d/1E_AK6QRSrfh5HdI6dp7EHmOSUfZL2YoV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Inglês</a>
            </div>
          </div>
        </div>
        <div className={`btn-menu-mobile ${isMenuOpen ? 'open' : ''}`}>
          <button className="menu-toggle" onClick={this.handleMenuToggle}>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          {isMenuOpen && (
            <ul className="menu-items">
              <a href="/"><li>HOME</li></a>
              <a href="#about"><li>SOBRE</li></a>
              <a href="#resume"><li>RESUMO</li></a>
              <a href="#portfolio"><li>PORTFOLIO</li></a>
              <a href="#contact"><li>CONTATO</li></a>
            </ul>
          )}
          <div className="dropdown">
            <button className="dropbtn">Download CV</button>
            <div className="dropdown-content">
              <a href="https://drive.google.com/file/d/1aME6PWbkOQAgJFyLnrj7DXNOpXy9Pc-7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Português</a>
              <a href="https://drive.google.com/file/d/1E_AK6QRSrfh5HdI6dp7EHmOSUfZL2YoV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Inglês</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
