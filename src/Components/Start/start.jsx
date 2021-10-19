import React from "react";
//import { Container } from "react-bootstrap";
import "../Start/start.css"
import backtrackImage from '../../resource/backtrackimage.jpg'
import logo from "../../resource/logo.jfif"

export default function Start() {
    return (
        <>
            <div id="box">
                <div>
                    <h3 id="centrelogo"><img src={logo} alt="LOGO" id="logoimage" /></h3>
                </div>
                <div className="Container startbody" style={{textAlign:"center"}}>
                    <p id="legend1">BACKTRACKING</p>
                    <img src={backtrackImage} alt="" style={{width:"100%" , height:"50vh"}}/>
                    <p id="legend2">Get Started</p>
                </div>
            </div>
        </>
    )
}

