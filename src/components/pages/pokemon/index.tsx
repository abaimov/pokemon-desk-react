import React from 'react';
import useData from '../../hook/getData';


export interface PokemonProps {
    id:string | number;
}

const Pokemon:React.FC<PokemonProps> = ({id}) => {

    const {data,isLoading} = useData('getPokemon',{id:25});

    if(isLoading) {
        return(<div>Loading</div>)
    }
    return (
        <div>
hello  {data?.name}
        </div>
    )
}


export default Pokemon