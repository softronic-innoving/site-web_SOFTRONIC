import React from 'react';
import '../../styles/Header.css';
import CardTitle from '../Card-title/CardTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
// import Chat from '../../pages/chat/chat';

function Header({ message, backgroundImage, logo, change, bshow , textline }) {
    const headerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    let textsize = textline ? 'message-text' : 'message-text line';
    let boxes = !bshow ? 'elements' : 'elements boxes';
    
    return (
        <>
            <div className='container-fluid header' style={headerStyle}>
                <div className="contain">
                    <div className="search">
                        <input type="search" placeholder='Recherche ...' name="search" id="search" />
                    </div>
                    <div className="message-container">
                        <p className={textsize}>{message}</p>
                    </div>
                    <div className="brainopx">
                        {!bshow ?(<a href="#"><img src={logo} alt="logo" /></a>): (<p></p>)}
                    </div>
                </div>
                
            </div>

            <div className="component-card">
            <div className={boxes}>
                <NavLink to="/Contact" className='nav-link' end><CardTitle title='Contact' icon={<FontAwesomeIcon icon={faPhone} />} /></NavLink>
                <NavLink to="/Partenaires" className='nav-link' end><CardTitle title='Partenaires' icon={<FontAwesomeIcon icon={faUser} />} /></NavLink>
                <NavLink to="/Support" className='nav-link' end><CardTitle title='Support' icon={<FontAwesomeIcon icon={faUser} />} /></NavLink>
                </div>
            </div>
        </>
    );
}

export default Header;
