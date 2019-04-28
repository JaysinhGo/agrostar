import React from 'react';
import { Link } from 'react-router-dom'
import './../css/Footer.css'

 const Footer = ()=>{
    return(
        <footer>
            <div className="row footerBox">
                <div className="col s6 center-align">
                    <Link to="/">
                        <span className="tabBox active">
                            <label><i className="material-icons">home</i></label>
                            <div className="center-align tabTxt">Products</div>
                        </span>
                    </Link>
                </div>
                <div className="col s6 center-align">
                    <Link to="/">
                        <span className="tabBox">
                            <label><i className="material-icons">shopping_basket</i></label>
                            <div className="center-align tabTxt">My Orders</div>
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;