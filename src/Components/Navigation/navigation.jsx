import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../Navigation/navigation.css"


export default function Navigation() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img  alt="" src="/logo.svg"  width="30"  height="30"  className="d-inline-block align-top"/>{' '}
                    AlgoVE
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Path Finding</Nav.Link>
                    <Nav.Link href="#pricing">Backtracking</Nav.Link>
                </Nav>
            </Container>
        </Navbar><br /></>
    )
}

