import React from 'react';
import './style/Header.css';
import logo from '../assets/images/facebook_logo_white.png';
import profileIcon from '../assets/images/profile-icon.png'

function Header(){
  return (
    <header className="header-bar">
      <div className="logo"><img src={logo}/></div>
      <div className="user-profile"><span>Meu perfil</span><img src={profileIcon}/></div>
    </header>

    )
}

export default Header;
