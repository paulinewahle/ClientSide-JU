import React, { useState } from 'react';

const dropDownComponent = (props) => {
   const [isDown, setDown] = useState(false);
    const dropOptions = () => {
        setDown(!isDown); {}
    };

    const optionClick = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setButtonText(event.target.value);
        value = event.target.value;
        props.onDropChange({
            name: props.name, 
            value:event.target.value
        });
        dropOptions();
    }

    const [buttonText, setButtonText] = useState("");
    let value;


    return (   
        <div className="dropDownParent">
            <button className="placeholderBtn" type="button" placeholder="" id="currencyInput1" onClick={dropOptions}>{buttonText}</button>
            <ul>
                {props.options.map((value, index) => {
                    return  <button key={index} value={value} id={isDown ? "optionsDown" : ""} className="dropButton" onClick={(event) => optionClick(event)}>{value}</button>
                })}
            </ul>
           
            {/*<button className="placeholderBtn"type="button" placeholder="" id="currencyInput2" onClick={dropOptions}></button>
            <button value = {props.options[1]} id={isDown ? "currencyOptionsDown" : ""} onClick={(event) => optionClick(event)}>{props.options[index]}</button>*/}
        </div>
    )
};


export default dropDownComponent;