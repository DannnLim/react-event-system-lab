// Code Keypad Component Here
import React,{Compenent, Component} from "react";

export default class Keypad extends React.Component {
   
            passWord = () => {
                console.log("Entering password...")
            }
    
    
    render(){
        return(
            <input onKeyUp={this.passWord} type="password"/>
        )
    }
}
    