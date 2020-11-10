import React from 'react';
import EmptyPage from './src/components/pages/empty-page';
import Homepage from './src/components/pages/homepage';
import Pokedex from './src/components/pages/pokedex';
import PokemonCard from './src/components/body/pokemon-card/pokemon-card';


interface GenMenu {
    title:string,
    link:string,
    component: () => JSX.Element

}

export const GENERAL_MENU = [
    {   
        title: 'Home',
        link:'/',
        component:() => <Homepage/>,
   
    },
    {
        title: 'Pokédex',
        link:'/pokedex',
        component:() => <Pokedex />
    },
    {
        title: 'Legendaries',
        link:'/legendaries',
        component:() => <EmptyPage title='Legendaries'/>
    },
    {
        title: 'Documentation',
        link:'/documentation',
        component:() => <EmptyPage title='Documentation'/>
        
    },
]


interface IaccMenu {
 [n:string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc:IaccMenu,item) => {
    acc[item.link] = item.component;
    return acc 
},{})

export default routes