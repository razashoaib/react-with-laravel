import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

const Header = ({token, cb}) => {

    const [isLoggedOut, setIsLoggedOut] = useState(token);

    const clearSessionStorage = () => {
        window.sessionStorage.clear();
        token = false;
        setIsLoggedOut(token);
        cb();
    }

    const loginAndRegister = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link onClick={() => clearSessionStorage()} className="nav-link" to={'/login'} >Login</Link>
            </li>
            <li className="nav-item">
                <Link onClick={() => clearSessionStorage()} className="nav-link" to={'/register'}>Register</Link>
            </li>
        </ul>);

    const logout = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link onClick={() => clearSessionStorage()} className="nav-link" to={'/login'} >Logout</Link>
            </li>
        </ul>);
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link">React With Laravel 7</a>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to={'/'}>Countries</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                {token || isLoggedOut ? logout : loginAndRegister}
            </div>
        </nav>
    );
}

export default Header;
