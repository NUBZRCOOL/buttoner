import React from 'react';

import img from '../static/img/adam.ico';

import '../static/css/adamSpeechBubble.css';


const AdamSpeechBubble = ({children}) => {

    return (
        
        <>
        
            <img width="100px" src={img} alt="adam" />
            <p>{children}</p>
        </>
    );
}

export default AdamSpeechBubble;