import React from 'react';

import logo from '../static/img/adam.ico';
import '../static/css/Home.css';


const Home = () => {
    return (

        <div id="appWrapper">

            <title>ur mom</title>

            <img src={logo} className="App-logo" alt="logo" />

            <p>POV: You are inside some random spinning image in some random react project</p>

            <button className="button">Button #1</button>
            <button className="button">Button #2</button>
            <button className="button">Button #3</button>

        </div>
    );
}

export default Home;