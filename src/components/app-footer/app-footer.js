import React from "react";
// import ReactRetina from "react-retina-image";
import { Link } from "react-router-dom";

// import BotLogo from '../../images/logo-footer.svg'

const AppFooter = () => {
    return (
        <div>
            {/*<ReactRetina className="w-25 p-3" src={BotLogo}/>*/}
            <Link to='/'><i className="fa fa-instagram"></i></Link>
            <Link to='/'><i className="fa fa-vk"></i></Link>
            <Link to='/'><i className="fa fa-facebook"></i></Link>
            <div>
                <h1>HTML ACADEMY</h1>
            </div>
        </div>
    )
};

export default AppFooter;