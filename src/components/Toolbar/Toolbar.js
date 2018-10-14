import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';
import logo from './img/logo.svg';
import smallLogo from './img/small-logo.svg';
import '../SideDrawer/SideDrawerButton';
import SideDrawerButton from '../SideDrawer/SideDrawerButton';

const toolbar = props => {

    const { bgColor, position, index, drawerClickHandler } = props;

    return <header className="toolbar" style={{background: bgColor ? bgColor : null, position: position ? position : null, zIndex: index ? index : null}}>
        <nav className="toolbar-nav">
            <div>
                <SideDrawerButton click={drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><Link to="/"><img alt="Andrei Nedelus" src={logo} /></Link></div>
            <div className="toolbar-small-logo"><Link to="/"><img alt="Andrei Nedelus" src={smallLogo} /></Link></div>
            <div className="toolbar-links">
                <ul>
                    <li><Link to="/">Acasa</Link></li>
                    <li><Link to="/portofoliu">Portofoliu</Link></li>
                    <li><Link to="/despre">Despre</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
};

export default toolbar;
