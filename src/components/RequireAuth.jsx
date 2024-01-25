import React from "react";
import { Navigate } from 'react-router-dom';


function RequireAuth({ children }) {
  // получаем срок действия токена из localstorage
    const expire = localStorage.getItem('expire');
    const expireTime = new Date(Date.parse(expire));
  // остающееся время действия токена в милисекундах
    const timeRemain = expireTime - Date.now();

    let auth = true ? timeRemain > 0 : false;
    console.log('auth from RequireAuth = ', auth);
    if (auth) {
        console.log('ваш токен действует');
    }

    return (
        auth == null ?
            null : (auth ?
                children : <Navigate to={"/login"} />)
    )
}

export default RequireAuth;