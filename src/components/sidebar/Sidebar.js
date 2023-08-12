import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className='nav__logo'>
          <img src={Logo} alt="" />
        </a>

        <nav className='nav'>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a className='nav__link' href='#home'>
                  <i className='icon-home'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#about'>
                <i className='icon-user-following'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href="#services">
                  <i className='icon-briefcase'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#resume'>
                  <i className='icon-graduation'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#portfolio'>
                  <i className='icon-layers'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#contact'>
                  <i className='icon-bubble'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className='nav__footer'>
          <span className='copyright'>
            &copy; 2022 - 2023.
          </span>
        </div>
      </aside>
      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  )
}

export default Sidebar;