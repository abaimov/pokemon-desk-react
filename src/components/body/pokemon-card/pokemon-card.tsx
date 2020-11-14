import React, { useEffect, useState } from 'react';
import './pokemon-card.scss';
import Heading from '../headers/headers';





const PokemonCard = () => {

    const [totalPokemons,setTotalPokemons] = useState(0);
    const [pokemons,setPokemons] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    

    useEffect (()=>{

        
        setIsLoading(true)
        fetch('http://zar.hosthot.ru/api/v1/pokemons')
        .then(res => res.json())
        .then(data => {
            setTotalPokemons(data.total)
            setPokemons(data.pokemons)
            setIsError(false)
        }).catch(()=>{
            setIsError(true)
 
        }
            
        ).finally(()=>{
            setIsLoading(false)
        })
        
    
    },[])

    if(isLoading){
        return <div>LOADING</div>
    }
    if(isError){
        return <div>EROROOO</div>
    }

    return <div>
    <div className='container-pokedex'>
        <div className='title-pokedex'>{totalPokemons} Pokemons for you to choose your favorite</div>
        <div className='input-pokedex'><input type="text" placeholder='Encuentra tu pokémon...'/></div>
    </div>
    <PokemonInfo pokemons={pokemons}/>
</div>


    }


export default PokemonCard;


interface PokemonInfoProps {
    pokemons:any
}

const PokemonInfo:React.FC<PokemonInfoProps> = ({pokemons}) => {

    return  <div className='container-pokemon-info'>
        {pokemons.map((item:any) => (
                <div className='root-pokemon-info' key={item.id}>
                <div className='infoWrap'>
        <Heading num={1}  className='titleName'>{item.name}</Heading>
                    <div className='statWrap'>
                        <div className='statItem'>
                            <div className='statValue'>
                               {item.stats.attack}
                            </div>
                            Attack
                        </div>
                        <div className='statItem'>
                            <div className='statValue'>
                                {item.stats.defense}
                            </div>
                            Defense
                        </div>
                    </div>
                    <div className='labelWrap'>
                        <span className='label'>Fire</span>
                    </div>
                </div>
                <div className='pictureWrap'>
                    <img src={item.img} alt={item.name} />
                </div>
            </div>
        ))}
            </div>
}
