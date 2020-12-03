import React, { PropsWithChildren } from 'react';
import EmptyPage from './src/components/pages/empty-page';
import Homepage from './src/components/pages/homepage';
import Pokedex from './src/components/pages/pokedex';
import PokemonCard from './src/components/body/pokemon-card/pokemon-card';
import Pokemon from './src/components/pages/pokemon';
import { PokemonProps } from './src/components/pages/pokemon/index';


interface GenMenu {
    title:string,
    link:string,
    component: (props:PropsWithChildren<any>) => JSX.Element

}

export enum LinkEnum {
    HOME = '/',
    POKEDEX = '/pokedex',
    LEGENDARIES = '/legendaries',
    DOCUMENTATION = '/documentation',
    POKEMON = '/pokedex/:id',

}

export const GENERAL_MENU = [
    {   
        title: 'Home',
        link:LinkEnum.HOME,
        component:() => <Homepage/>,
   
    },
    {
        title: 'Pokédex',
        link:LinkEnum.POKEDEX,
        component:() => <Pokedex />
    },
    {
        title: 'Legendaries',
        link:LinkEnum.LEGENDARIES,
        component:() => <EmptyPage title='Legendaries'/>
    },
    {
        title: 'Documentation',
        link:LinkEnum.DOCUMENTATION,
        component:() => <EmptyPage title='Documentation'/>
        
    },
]


const SECOND_ROUTES:GenMenu[] = [{
title:'Pokemon',
link:LinkEnum.POKEMON,
component:({id}:PokemonProps) => <Pokemon id={id}/>

}]

interface IaccMenu {
 [n:string]: (props:PropsWithChildren<any>) => JSX.Element
}

const routes = [...GENERAL_MENU,...SECOND_ROUTES].reduce((acc:IaccMenu,item) => {
    acc[item.link] = item.component;
    return acc 
},{})

export default routes