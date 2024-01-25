import React, {useState} from "react";
import { Link } from "react-router-dom";

import Main from "./Main.jsx";
import Layout from "./Layout.jsx";
import Header from "./Header.jsx";
import '../styles/OverallStyles.css';


function Logout() {
  const [value,setValue] = useState();
  function clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expire');
    localStorage.removeItem('user');
    setValue({});                       // вызывает обновление компонента
  }
  
  const token = localStorage.getItem('token');
  let isLoggedIn = false;
  const expire = localStorage.getItem('expire');
  const user = localStorage.getItem('user')

  if (!!token && !!expire) {
    const expireTime = new Date(Date.parse(expire));
    const timeRemain = expireTime - Date.now();
    isLoggedIn = true ? timeRemain > 0 : false;
  }

  return (
    <React.Fragment>
      <nav>
        <Header />
      </nav>
      <div className="container">
        <div>
          {isLoggedIn && <p>Вы зарегистрированы как {user}</p>}
          {isLoggedIn && <p>Выйти из системы?</p>}
          {isLoggedIn && <button onClick={clearAuthData}>Выйти</button>}
        </div>
        {!isLoggedIn && <p>Вы вышли из системы</p>}
      </div>
    </React.Fragment>
    )
}

export default Logout;