import React from 'react';
import './../css/Footer.css'

 const Footer = ()=>{
    return(
        <footer>
            <div className="row footerBox">
                <div className="col s6 center-align">
                    <a>
                        <span className="tabBox active">
                            <label><i className="material-icons">home</i></label>
                            <div className="center-align tabTxt">Products</div>
                        </span>
                    </a>
                </div>
                <div className="col s6 center-align">
                    <a>
                        <span className="tabBox">
                            <label><i className="material-icons">shopping_basket</i></label>
                            <div className="center-align tabTxt">My Orders</div>
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;