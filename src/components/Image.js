import React from 'react';
import './Image.css';

export default function Image() {
    return (
        <> 
            <img src={require('../assets/coding.jpg').default} className='main-image'alt={''}/>     
        </>
    )
}
