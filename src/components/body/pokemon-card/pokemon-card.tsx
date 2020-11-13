import React, { useEffect, useState } from 'react';
import './pokemon-card.scss';
import Heading from '../headers/headers';

const usePokemons = () => { 
    const [data,setData] = useState(0)
    const [pokemons,setPokemons] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)

    useEffect(()=>{

        const getPokemons = async () => {
            setIsLoading(true);

            try {
                const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
                const result = await response.json();
                setData(result);
                setPokemons(data.pokemons);
            } catch (e){
                setIsError(true);
            }finally {
                setIsLoading(false);
            }
        }

        getPokemons();
    },[])

return {

    data,
    isLoading,
    isError
}

}


const PokemonCard = () => {

    const {
        data,
        isLoading,
        isError
    } = usePokemons();

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error</div>
    }

    return (
        <div>
            <div className='container-pokedex'>
                <div>{data.pokemons.map(item => <div>{item.name}</div>)}</div>
                <div className='title-pokedex'>{data.total} Pokemons for you to choose your favorite</div>
                <div className='input-pokedex'><input type="text" placeholder='Encuentra tu pokémon...'/></div>
            </div>
            <PokemonInfo data={data}/>
        </div>

 

    );
};

export default PokemonCard;




const PokemonInfo = ({data}) => {

    return  <div className='root' >
    <div className='infoWrap'>
       {data.pokemons.map(item => ( <Heading num={1}  className='titleName'>{item.name}</Heading>))}
        <div className='statWrap'>
            <div className='statItem'>
                <div className='statValue'>
                    52
                </div>
                Attack
            </div>
            <div className='statItem'>
                <div className='statValue'>
                    43
                </div>
                Defense
            </div>
        </div>
        <div className='labelWrap'>
            <span className='label'>Fire</span>
        </div>
    </div>
    <div className='pictureWrap'>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="Charmander" />
    </div>
</div>


}
