import React from "react";
// import Card from "react-bootstrap/Card";
//import { Container } from "react-bootstrap";
import "../Footer/footer.css"
import fb from "../../resource/fb.png"
import insta from "../../resource/insta.png"
import linkedin from "../../resource/in.png"
import gmail from "../../resource/gmail.png"

export default function Footer() {
    return (
        <>
        <footer className="page-footer font-small blue pt-4 foot">
            <div className="container-fluid text-center text-md-left" style={{ padding : "3vh" }}>
                <div className="row" style={{ padding : "3vh" }}>
                    <div className="col-md-6 mt-md-3 mt-6" style={{ padding : "3vh" }}>
                        <h5 className="text-uppercase"> Algorithm VE</h5>
                        <div id="footer-panel">
                            <a href="#a"><img src={fb} alt="fb" class="footer-icon"></img></a>
                            <a href="#a"><img src={insta} alt="insta" class="footer-icon"></img></a> 
                            <a href="mailto:#a"><img src={gmail} alt="GMAIL" class="footer-icon"></img></a> 
                            <a href="#a"><img src={linkedin} alt="in" class="footer-icon"></img></a> 
                        </div>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3 linklist">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3 linklist">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>        
        </>
    )
}


