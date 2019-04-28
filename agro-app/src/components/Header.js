import React from 'react';
import './../css/Header.css'

 const Header = ()=>{
    return(
        <header>
            <div className="row headerBox">
                <div className="brand-logo">
                </div>
                <div className="col s6 offset-s6">
                    <ul className="right-align">
                        <li><i className="material-icons">refresh</i></li>
                        <li><i className="material-icons">person</i></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;