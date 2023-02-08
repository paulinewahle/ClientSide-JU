import React, { useState } from 'react';
import DropDown from '../dropDown';
var input;
var setInput;
let objectArray = [];
let arrayString;
let dataObject;

const registrationForm = () => {
    
    const [input,setInput] = useState({
       brand:'',
       price:'',
       currency: '',
       product:'',
       filter:'',
       eco:'',
       describtion:'',
       homeURL:'',
       ecommerce:'',
       productURL:'',
       inshop:'',
       country:'',
       googleMap:'',
       primeIMG:''
    })
    

function handleChange(event){
    const {name, value} = event.target;
    //console.log("handle connected");
    setInput (prevInput => {
        return{
            ...prevInput,
            [name]: value
        }
    })  
}

const handleDropChange = (dropDown) => {
    console.log(dropDown.value, dropDown.name)
    const {name, value} = dropDown;
    //console.log("handle connected");
    setInput (prevInput => {
        return{
            ...prevInput,
            [name]: value
        }
    })  
}

// const submitForm = () => {
//     let newSubmit = "this is the new thing";
//     let newSubmit = new inputAttributes(input.brand);
//     console.log(newSubmit);    
// } 

function handleClick(event){
    event.preventDefault();
    console.log("connected");
    console.log(input);

    //add to array NO DIVIDING KEY AND VALUES WAS A BAD IDEA
    // brandArray.push(document.getElementById("brandInput").value);
    // productArray.push(document.getElementById("productInput").value);
    // priceArray.push(document.getElementById("priceInput").value);
    // //currency dropDown

    // //add to localStorage 
    // brandString = JSON.stringify(brandArray);
    // localStorage.setItem("Brands", brandString);

    // productString = JSON.stringify(productArray);
    // localStorage.setItem("Products", productString);

    // priceString = JSON.stringify(priceArray);
    // localStorage.setItem("Prices", priceString);
    //create object
    dataObject = {
        Brand: document.getElementById('brandInput').value,
        Product: document.getElementById('productInput').value
    };

   
    //add to array
    objectArray.push(dataObject);

    //add to localStorage
    arrayString = JSON.stringify(objectArray);
    localStorage.setItem("arrayString", arrayString);
    
    //reset fields
    function emptyFields(){

        setInput({
            brand:'',
            price:'',
            currency: '',
            product:'',
            filter:'',
            eco:'',
            describtion:'',
            homeURL:'',
            ecommerce:'',
            productURL:'',
            inshop:'',
            country:'',
            googleMap:'',
            primeIMG:''
         });

        document.getElementById('brandInput').value = "";
        document.getElementById('priceInput').value = "";
        document.getElementById('productInput').value = "";
        document.getElementById('describtionInput').value = "";
        document.getElementById('homepageInput').value = "";
        document.getElementById('mapsInput').value = "";
        document.getElementById('primeimageInput').value = "";
        //empty dropDown button text?
         
    }
    emptyFields();
}
    return (
    <div id="registrationPageWrapper">  
        <form id="formWrapper" action="">
        
            <label id="brandLabel">Brand</label>
            <input  id="brandInput" name="brand" value={input.brand} type="text" autoComplete="off" onChange={handleChange}></input>
            
            <label id="priceLabel">Price</label>
            <input id="priceInput" name="price" value={input.price} type="text" autoComplete="off" placeholder="00.00" onChange={handleChange}></input>
            
            <label id="currencyLabel">Currency</label>
            <DropDown name="currency" options={["$","€","£","kr"]} onDropChange={handleDropChange}/>
 
            <label id="productLabel" >Product</label>
            <input id="productInput" name="product" value={input.product} type="text" autoComplete="off" onChange={handleChange}></input>

            <label id="filterLabel" >Filter</label>
            <DropDown name="filter" options={["filter1","filter2","filter3","filter4"]} onDropChange={handleDropChange}/>

            <label id="ecoLabel" >Eco label</label>
            <DropDown name="eco" options={["label1","label2","label3"]} onDropChange={handleDropChange}/>
            
            <label id="describtionLabel" >Product describtion</label>
            <textarea id="describtionInput" name="describtion" value={input.describtion} autoComplete="off" type="text" onChange={handleChange}></textarea>

            <label id="homepageLabel" >Homepage URL</label>
            <input id="homepageInput" name="homeURL" value={input.homeURL} type="url" autoComplete="off" onChange={handleChange}></input>

            <label id="ecommerceLabel">E-commerce availability</label>
            <DropDown name="ecommerce" options={["yes","no"]} onDropChange={handleDropChange}/>
            
            <label id="productLinkLabel" >Product detailview URL</label>
            <input className="reset-input" id="productLinkInput" name="productURL" value={input.productURL} type="url" autoComplete="off" onChange={handleChange}></input>

            <label id="inshopLabel" >In-shop availability</label>
            <DropDown name="inshop" options={["yes","no"]} onDropChange={handleDropChange}/>
           
            <label id="countryLabel" >Country</label>
            <DropDown name="country" options={["Sweden","Germany","Italy"]} onDropChange={handleDropChange}/>

            <label id="mapsLabel" >URL</label>
            <input id="mapsInput" name="googleMap" value={input.googleMap} type="url" autoComplete="off" onChange={handleChange}></input>

            <label id="primeimageLabel">Primary Product Image</label>
            <input id="primeimageInput" name="primeIMG" value={input.primeIMG} type="file" autoComplete="off" onChange={handleChange}></input>


            <button type="submit" onClick={handleClick} value="submit" id="submit">Submit</button>
        </form>
    </div>
    )

} 

export default registrationForm;