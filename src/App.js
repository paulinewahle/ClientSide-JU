import React, { useState } from 'react';
import './App.scss';
import Webpages from './webpages/index';
import Header from './header';



const App = () =>{
    return (
        <div>
        <Header />
        <Webpages />
        
        </div>

    )
}



export default App;
