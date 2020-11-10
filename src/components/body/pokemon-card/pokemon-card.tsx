import React from 'react';
import './pokemon-card.scss';
import Heading from '../headers/headers';


const PokemonCard = () => {
    return (
        <div className='root'>
            <div className='infoWrap'>
                <Heading num={1}  className='titleName'>
                    Charmander
                </Heading>
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
    );
};

export default PokemonCard;
