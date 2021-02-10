import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './header.css'
import Logo from "../logo/logo";

export default class Header extends Component {

    state = {
        clickBurger: false
    }

    burgerBtn = () => {
        const {clickBurger} = this.state;

        this.setState({
            clickBurger: !clickBurger
        })
    }

    render() {

        const {clickBurger} = this.state;
        const ulStyle = clickBurger ? 'nav__list active' : 'nav__list';
        const burgerStyle = clickBurger ? 'nav__burger rotate' : 'nav__burger';

        return (
            <nav className="nav">
                <div className="nav__logo">
                    <Logo/>
                </div>
                <ul className={ulStyle}>
                    <li><Link to='/'>ГЛАВНАЯ</Link></li>
                    <li><Link to='/profile'>ПРОФИЛЬ</Link></li>
                    <li><Link to='/news'>НОВОСТИ</Link></li>
                    <li className='nav__LogIn'><Link to='/login'>ВХОД</Link></li>
                </ul>

                <div onClick={this.burgerBtn} className={burgerStyle}>
                    <span></span>
                </div>
            </nav>
        )
    }
}