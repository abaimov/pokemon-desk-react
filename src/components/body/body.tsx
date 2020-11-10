import React from 'react';
import Footer from '../footer/footer';
import './body.scss'
import Button from './btn/btn';
import Parallax from './parallax/paralax';




const Body = () => {
  
    return <> 
             <div className="body-container">
                <div className='background-image-body'>
                  <Parallax/>
                </div>
                <div className='info-body'>
                    <div className='title-body'>
                        <span>Find</span> all your 
                        favorite <span>Pokemon</span>
                      
                    </div>
                <div className='description-body'>
                        You can know the type of Pokemon, 
                        its strengths, 
                        disadvantages and abilities
                </div>
            <Button smallBtn={true}  onClick={()=>console.log('hello')}>See pokemons</Button>
                </div>
            </div>
     <Footer/>
            </>
}

export default Body;