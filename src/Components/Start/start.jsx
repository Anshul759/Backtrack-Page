import React from "react";
//import { Container } from "react-bootstrap";
import "../Start/start.css"
import logoImage from '../../resource/logo.PNG'

export default function Start() {
    return (
        <div id="box">
            <div id="logo">
                <img src={logoImage} alt="Not found" id="logoimage" />
            </div>
        </div>

    )
}

