import React from "react";
import { Container,Row,Col } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
//import { Container } from "react-bootstrap";
import "../Info/info.css"

export default function Info() {
    return (
        <>
            <div id="box-2-1">
                <h3 id="centrehead"> &ensp; WHAT IS BACKTRACKING ALGORITHM &ensp; </h3>
                <p id="defination">
                Backtracking is an algorithmic technique where the goal is to get all solutions to a problem using the brute force approach. It consists of building a set of all the solutions incrementally. Since a problem would have constraints, the solutions that fail to satisfy them will be removed.
                </p>
            </div>

            <div id="box-2-2">
            <hr className="hrline" />
                <h3 id="aspectsheading"> IMPORTANT ASPECTS OF BACKTRACKING ALGORITHM</h3>
                <Container>
                <Row>
                    <Col lg={true} className="cardblocks" style={{backgroundColor: "#a4e3c3" }}>
                        <p class="card-text cardb">It uses recursive calling to find a solution set by building a solution step by step, increasing levels with time.</p>
                        <br />
                    </Col>
                    <Col lg={true} className="cardblocks" style={{backgroundColor: "#f35434" }}>
                        <p class="card-text cardb">A backtracking algorithm uses the depth-first search method.</p>
                        <br />
                    </Col>
                    <Col lg={true} className="cardblocks" style={{backgroundColor: "#fbda2b" }}>
                        <p class="card-text cardb">It is found to be very effective for decision problems and optimization problems.</p>
                        <br />
                    </Col>
                    <Col lg={true} className="cardblocks" style={{backgroundColor: "#3699a1" }}>
                        <p class="card-text cardb">Backtracking is not considered an optimized technique to solve a problem. It finds its application when the solution needed is not time-bounded.</p>
                        <br />
                    </Col>
                </Row>
                </Container>
                <hr className="hrline" />
            </div>
        </>
    )
}


