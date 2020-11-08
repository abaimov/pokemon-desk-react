import  React,{useEffect,useState} from 'react';
import './paralax.scss'
import Pikachu from './assets/image 1.png'
import PoceBallPng from './assets/PokeBall1.png'
import PoceBallBigPng from './assets/PokeBall2.png'
import CloudBigPng from './assets/cloud1.png'
import CloudSmallPng from './assets/cloud2.png'



const Parallax = ()=>{
    
const [screenX, setScreenX] = useState(0);
const [screenY, setScreenY] = useState(0);

    useEffect(()=>{
        const handleMouse = (event:MouseEvent)=>{
            setScreenX(event.screenX);
            setScreenY(event.screenY);

            
        }

        window.addEventListener('mousemove',handleMouse)

        return () => window.removeEventListener('mousemove',handleMouse)
    },[screenY,screenX])

    return <div className='parallax-container'>
                <div className='poceball-big' style={{transform:`translate(${screenY*0.04}px,${screenX*0.01}px)`}}><img src={PoceBallBigPng} alt=""/></div>
                <div className='cloud-big' style={{transform:`translate(${screenY*0.09}px,${screenX*0.04}px)`}}><img src={CloudBigPng} alt=""/></div>
                <div className='pikachu' style={{transform:`translate(${screenY*0.02}px,${screenX*0.01}px)`}}><img src={Pikachu} alt=""/></div>
                <div className='poceball-small' style={{transform:`translate(${screenY*0.03}px,${screenX*0.04}px)`}}><img src={PoceBallPng} alt=""/></div>
                <div className='cloud-small' style={{transform:`translate(${screenY*0.09}px,${screenX*0.01}px)`}}><img src={CloudSmallPng} alt=""/></div>
            </div>
}
export default Parallax;