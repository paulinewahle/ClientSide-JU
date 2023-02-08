import React, { useEffect } from 'react';
//import Product from './product';
import RegistrationForm from './registrationForm';
const products = () => {
    useEffect(() => {
        document.title = 'product page';
    });

    

    // //create cards
    // let i = 0;
  
    // let newCard;
    // let createNewCardDiv = document.createElement("div");
    // cardContainer.appendChild(newCard);

    
    // newCard.style.border = "black solid 3px";
    // newCard.style.borderRadius = "10px";
    // newCard.style.fontFamily = "sans-serif";
    // newCard.style.margin = "2%";
    // newCard.style.padding = "2%";
    // newCard.style.width = "100%";

    //fill cards
    // let retrievedBrands = localStorage.getItem("Brands");
    // let parseBrandArray = JSON.parse(retrievedBrands);
    // console.log("parseBrandArray" + parseBrandArray);
        
    // for (let i=0; i < parseBrandArray.length; i++){
    //     console.log("i" + i);
    //     newCard = "card" + i;
    //     console.log("newCard" + newCard);
    //     //let cardCnt = document.createElement("p");
    //     //newCard.appendChild(cardCnt);
    //     console.log(parseBrandArray);
    //     newCard.innerHTML = "Brand: " + (parseBrandArray[i]);
    // }

    // let retrievedProducts = localStorage.getItem("Products");
    // let parseProductArray = JSON.parse(retrievedProducts);
    // console.log("parseProductArray" + parseProductArray);
        
    // for (let i=0; i < parseProductArray.length; i++){
    //     cardNr = "card" + i;
    //     console.log(cardNr);
    //     cardNr = document.createElement("div");

    //     card.appendChild(cardNr);
    //     cardNr.style.border = "black solid 3px";
    //     cardNr.style.borderRadius = "10px";
    //     cardNr.style.fontFamily = "sans-serif";
    //     cardNr.style.margin = "2%";
    //     cardNr.style.padding = "2%";
    //     cardNr.style.width = "100%";
    //     cardNr.innerHTML = "Product: " + (parseProductArray[i]);
    // }
    

    let readStorage = localStorage.getItem("arrayString");
   
    if(readStorage === null){
        console.log("its null");
        }
        else{
        //create card container
        let cardContainer = document.createElement("div");
        document.body.appendChild(cardContainer);
        
        //yes garrit it's not very reacty to style that here..
        cardContainer.style.margin = "2%";
        cardContainer.style.padding = "2%";
        cardContainer.style.width = "100%";

        //get data back out of local storage
        let parseArray = JSON.parse(readStorage);
        console.log("parseArray" + parseArray);

        //create cards with storage data
            for (let i=0; i < parseArray.length; i++){
            let brandCard = document.createElement("p");
            cardContainer.appendChild(brandCard);
            brandCard.innerHTML = "Brand: " + (parseArray[i].Brand);
        
            let productCard = document.createElement("p");
            cardContainer.appendChild(productCard);
            productCard.innerHTML = "Product: " + (parseArray[i].Product);
    }
}
    

    //create cards from object value
    // function createCard(){
    //     let card = document.createElement("div");
    //     cardContainer.appendChild(card);
    //     card.style.border = "#f6f4d2 solid 3px";
    //     card.style.color = "#f6f4d2";
    //     card.style.borderRadius = "10px";
    //     card.style.fontFamily = "sans-serif";
    //     card.style.margin = "2%";
    //     card.style.padding = "2%";

    //     let cardBrand = document.createElement("p");
    //     card.appendChild(cardBrand);
    //     cardBrand.innerHTML = "Brand: " + document.getElementById('brandInput').value;

    //     let cardProduct = document.createElement("p");
    //     card.appendChild(cardProduct);
    //     cardProduct.innerHTML = "Product: " + document.getElementById('productInput').value;
    // }
    // createCard();
    
    return (
        <div>
        </div>
        
    );
};

export default products 