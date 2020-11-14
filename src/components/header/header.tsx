
import React from 'react';
import './header.scss';
import {A, usePath} from 'hookrouter'
import { ReactComponent as HeaderLogo } from './assets/Logo.svg'
import { GENERAL_MENU } from '../../../routes';

interface iMenu  {
    id: string
    value: string
    link:string
}

// const Menu: iMenu[] = [
//     {   
//         id:'1',
//         value: 'Home',
//         link:'/'
//     },
//     {
//         id:'2',
//         value: 'Pokédex',
//         link:'/pokedex'
//     },
//     {
//         id:'3',
//         value: 'Legendaries',
//         link:'/legendaries'
//     },
//     {
//         id:'4',
//         value: 'Documentation',
//         link:'/documentation'
//     },
// ]

const Header = () => {
    
    return (<div className='menu-container'>
                <div className='wrap'>
                    <div className="logo"><HeaderLogo/></div>
                    <div className='nav-bar'>
                        {GENERAL_MENU.map(({title,link})=>(<div className='nav-item' key={title}><A href={link}>{title}</A></div>))}
                    </div>
                </div>
        </div>)
}


export default React.memo(Header) ;