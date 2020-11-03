
import React from 'react';
import './header.scss';


const Header = () => {
    return (<div className='header'>
                <div className="logo">Logo</div>
                <div className='nav-bar'>
                    <div className='nav-item'>Home</div>
                    <div className='nav-item'>Pokedex</div>
                    <div className='nav-item'>Legendaries</div>
                    <div className='nav-item'>Documentation</div>
                </div>
            </div>)
}

export default Header