import React from "react";
//import { Container } from "react-bootstrap";
import "../Start/start.css"
import logoImage from '../../resource/logo.PNG'

export default function Start() {
    return (
        <>
        <div id="box">
            <div id="logo">
                <h3 id="centrelogo"><img src="" alt="LOGO" id="logoimage" /></h3>
            </div>
            <fieldset className="Container startbody">
                <legend id="legend1">BACKTRACKING</legend>
                <img src={logoImage} alt="" style={{width:"100%" , height:"50vh"}}/>
                <legend id="legend2">Get Started</legend>
            </fieldset>
        </div>
        
        </>
    )
}

