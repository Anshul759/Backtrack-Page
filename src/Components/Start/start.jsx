import React from "react";
//import { Container } from "react-bootstrap";
import "../Start/start.css"
import logoImage from '../../resource/logo.PNG'

export default function Start() {
    return (
        <><div id="box">
            <div id="logo">
                <h3 id="centrelogo"><img src={logoImage} alt="Not found" id="logoimage" /></h3>
            </div>
            <div id="field-legend">
                <fieldset><legend>Wash Your Hands</legend></fieldset>
                <fieldset><legend>Stay Apart</legend></fieldset>
                <fieldset><legend></legend></fieldset>
                <fieldset><legend></legend></fieldset>
            </div>
        </div>
        
        </>
    )
}

