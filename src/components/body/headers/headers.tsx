import React from 'react';



interface HeadersProps {
    children:string,
    num:number,
    className:string
 
    
}

const Heading:React.FC<HeadersProps> = ({num,children, className}) =>{
    return React.createElement(
        `h${num}`,
        {children}
      )
}

export default Heading