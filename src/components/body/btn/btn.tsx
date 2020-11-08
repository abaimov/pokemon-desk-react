import  React, {useEffect} from 'react';
import './btn.scss';

interface ButtonProps{
    onClick: (event:React.MouseEvent<HTMLButtonElement>) => void,
    smallBtn?:boolean
}

const Button:React.FC<ButtonProps> = ({children ,onClick,smallBtn}) =>{
    return <button type='button' className={smallBtn?'green-large-btn':'xxl-btn'}>
                {children}
            </button>

}
export default Button