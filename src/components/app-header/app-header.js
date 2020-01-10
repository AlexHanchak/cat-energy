import React from "react";
import ImageRetina from "react-retina-image";

import { Link } from "react-router-dom";
import './app-header.sass'

const AppHeader = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center  mb-3 bg-white ">
            <ImageRetina className="my-0 mr-md-auto" src={require('../../images/logo-desktop.svg')}/>
            <nav className="my-2 my-md-0 mr-md-3 mdl-grid">
                <Link to='/' className="p-2 text-dark mdl-cell" href="#">ГЛАВНАЯ</Link>
                <Link to='/' className="p-2 text-dark mdl-cell" href="#">КАТАЛОГ ПРОДУКЦИИ</Link>
                <Link to='/' className="p-2 text-dark mdl-cell" href="#">ПОДБОР ПРОГРАММЫ</Link>
            </nav>
        </div>
    )
};

export default AppHeader;