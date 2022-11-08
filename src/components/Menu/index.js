import React from 'react';
import Logo from '../../assets/imgs/logo_azul.png'
//import ButtonLink from './components/ButtonLink';
import "./Menu.css"
import Button from "../../components/Button/index"

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="devFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;