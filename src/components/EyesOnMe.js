// Code EyesOnMe Component Here
import { render } from "enzyme";
import React,{ Component} from "react";

export default class EyesOnMe extends React.Component{
    handleFocus = () =>{
        console.log("Good!")
    };
    
    handleBlur = () =>{
        console.log("Hey! Eyes on me!");
    };
    
render(){
    return (
        
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>button</button>
    )
}
}



