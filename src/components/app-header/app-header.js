import React from "react";

import {NavLink} from "react-router-dom";
import './app-header.sass'

const AppHeader = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center  mb-3" id='headerM'>
            <img alt='' className="my-0 mr-md-auto" src={require('../../images/logo-desktop.svg')}/>
            <nav className="my-2 my-md-0 mr-md-3 mdl-grid">
                <NavLink to='/' activeClassName='activeM' className="p-2 mdl-cell" href="#">ГЛАВНАЯ</NavLink>
                <NavLink to='/MainProduct' activeClassName='active' className="p-2 mdl-cell" id='navigationLink' href="#">КАТАЛОГ ПРОДУКЦИИ</NavLink>
                <NavLink to='/Programs' activeClassName='active' className="p-2 mdl-cell">ПОДБОР ПРОГРАММЫ</NavLink>
            </nav>
        </div>
    )
};

export default AppHeader;