import React from 'react';
import './footer.css';
import {Link} from "react-router-dom";
import Logo from "../logo/logo";

const Footer = () => {
    return (
        <div className='footer'>
            <Logo/>
            <div>
                <h6>Документы</h6>
                <ul type="square">
                    <li><Link to='/'>Условия использования</Link></li>
                    <li><Link to='/'>Политика конфиденциальности</Link></li>
                </ul>
            </div>
            <div>
                <h6>Контакты</h6>
                <div>
                    <i className="fa fa-facebook-f"></i>
                    <i className="fa fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;