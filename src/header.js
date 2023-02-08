import React, { useState } from 'react';

const headerComponent = () => {
    return(
        <header>
            
           
                <h1>The Back-end Disaster</h1>
                <nav>
                    <ul>
                        <li><a href="http://localhost:8080">Home</a></li>
                        <li><a href="http://localhost:8080/registrationForm">Registration Form</a></li>
                        <li><a href="http://localhost:8080/products">Products</a></li>
                    </ul>
                </nav>
           
            
            
        </header>
        
    )

}
export default headerComponent;
//module.exports = headerComponent;

