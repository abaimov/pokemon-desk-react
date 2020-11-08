
import React from 'react';
import './header.scss';

import { ReactComponent as HeaderLogo } from './assets/Logo.svg'

interface iMenu  {
    id: string
    value: string
    link:string
}

const Menu: iMenu[] = [
    {   
        id:'1',
        value: 'Home',
        link:'#'
    },
    {
        id:'2',
        value: 'Pokédex',
        link:'#'
    },
    {
        id:'3',
        value: 'Legendaries',
        link:'#'
    },
    {
        id:'4',
        value: 'Documentation',
        link:'#'
    },
]

const Header = () => {

    return (<div className='menu-container'>
                <div className='wrap'>
                    <div className="logo"><HeaderLogo/></div>
                    <div className='nav-bar'>
                        {Menu.map(({value,link},id)=>(<div className='nav-item' key={id}><a href={link}>{value}</a></div>))}
                    </div>
                </div>
        </div>)
}


export default Header