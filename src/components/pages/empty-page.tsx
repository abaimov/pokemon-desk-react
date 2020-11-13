import React from 'react';
import Header from '../header/header';

interface EmptyPageProps {
    title?:string
}


const EmptyPage:React.FC<EmptyPageProps> = ({title}) => {
    return (<div>

            This empty page {title}
            </div>);
}

export default EmptyPage;