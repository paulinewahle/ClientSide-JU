import React, { useState } from 'react';
let key;

Object.keys(localStorage).forEach(function(key){
    console.log(localStorage.getItem('Brands'));
});
let retrievedBrands = localStorage.getItem('Brands');
    
const card = () => (
    <div> 
        <p> {localStorage.getItem('Brands')} </p>
    </div>
);

export default card;