import React from "react";
import { Link } from "react-router-dom";

import '../styles/Header.css';
import '../styles/OverallStyles.css';

import logoScan from "./img/logo_SKAN_header.png";


function HeaderNotAuthUser() {
  return (

    <React.Fragment>    
          <header>
            <div className="container">
               <nav className="navbar">
                    <div className="logo">
                        <a href="#"><img src={ logoScan } alt="logo-scan" /></a>
                    </div>
                    <ul className="menu_1">
                        <li><a href="" className="menu__item">Главная</a></li>
                        <li><a href="" className="menu__item">Тарифы</a></li>
                        <li><a href="" className="menu__item">FAQ</a></li>
                    </ul>
                    <ul className="menu_2">
                        <li><a href="" className="menu__item">Зарегистрироваться</a></li>
                        <li><Link to="/login" className="menu__item menu__item_btn">Войти</Link></li>
                    </ul>
                </nav>
              </div>
            </header>
          </React.Fragment>
    );
}

export default HeaderNotAuthUser;