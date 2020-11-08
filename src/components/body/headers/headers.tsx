import React from 'react';



interface HeadersProps {
    children:string,
    num:number
 
    
}

const Heading:React.FC<HeadersProps> = ({num,children}) =>{
    return React.createElement(
        `h${num}`,
        {children}
      )
}

export default Heading