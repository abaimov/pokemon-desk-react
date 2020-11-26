import {useState,useEffect} from 'react';

const useDebounce = (value:string,delay:number) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{     
          setDebounceValue(value);
        },delay);

        return () =>{
            clearInterval(handler);
        }
    },[value]);
}

export default useDebounce;