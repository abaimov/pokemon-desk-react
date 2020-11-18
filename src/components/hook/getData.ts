import  { useEffect, useState } from 'react';
import req from '../util/request';

const useData = (endpoint:string,query:object) => {

    const [totalPokemons,setTotalPokemons] = useState(0);
    const [pokemons,setPokemons] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);

    useEffect (()=>{
        setIsLoading(true)
        req(endpoint,query).then(data => {
            setTotalPokemons(data.total)
            setPokemons(data.pokemons)
            setIsError(false)
        }).catch(()=>{
            setIsError(true)
 
        }
            
        ).finally(()=>{
            setIsLoading(false)
        })
        
    
    },[query])

    return { 
        totalPokemons,
        pokemons,
        isLoading,
        isError
    }
}

export default useData;