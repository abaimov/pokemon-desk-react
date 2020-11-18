import React,{useMemo, useState} from 'react';
import useData from '../../hook/getData';
import Heading from '../headers/headers';
import './pokemon-card.scss';

const PokemonCard = () => {

    const [searchValue,setSearchValue] = useState('');
    const query =useMemo(()=> ({
        name:searchValue
    }),[searchValue])

    const{ 
        totalPokemons,
        pokemons,
        isLoading,
        isError,
        
    } = useData('getPokemons',query)


    const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        

    }

    if(isLoading){
        return <div>LOADING</div>
    }
    if(isError){
        return <div>EROROOO</div>
    }

    return <div>
    <div className='container-pokedex'>
        <div className='title-pokedex'>{!isLoading && totalPokemons} Pokemons for you to choose your favorite</div>
        <div className='input-pokedex'><input value={searchValue} onChange={handleSearchChange} type="text" placeholder='Encuentra tu pokémon...'/></div>
    </div>
    <PokemonInfo pokemons={pokemons} isLoading/>
</div>


    }


export default PokemonCard;


interface PokemonInfoProps {
    pokemons:any,
    isLoading:boolean
}

const PokemonInfo:React.FC<PokemonInfoProps> = ({pokemons,isLoading}) => {

    return  <div className='container-pokemon-info'>
        {isLoading && pokemons.map((item:any) => (
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
