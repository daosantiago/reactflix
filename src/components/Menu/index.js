import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DÃOFLIX LOGO"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/video">
                Uma outra coisa qualquer
            </Button>
        </nav>
    );
}

export default Menu;