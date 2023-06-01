// Code Keypad Component Here
import React from "react";

function Keypad (){

function handleChange () {
    console.log("Entering password...")
    //console.log(event.target.value)
}

    return (
      
        <input type="password" onChange={handleChange} placeholder="Entering password..."/>
      
    );
}

export default Keypad;