import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav , NavDropdown } from "react-bootstrap";
import "../Navigation/navigation.css"
import logo from "../../resource/logo.jfif"


export default function Navigation() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" style={{backgroundColor:"#f35434"}}>
            <Container>
                <Navbar.Brand href="#home">
                <img  alt="" src={logo}  width="30"  style={{borderRadius:"100%"}} height="30"  className="d-inline-block align-top"/>{' '}
                    AlgoVE
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Path Finding" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Depth First</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Breadth First</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">A* Search</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Dijkstras Algorithm</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Sudoku Solver</Nav.Link>
                        <Nav.Link href="#pricing">GoDutch</Nav.Link>
                        <Nav.Link href="#pricing">Image Compressor</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                         </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* <Navbar variant="dark" sticky="top" style={{backgroundColor:"#f35434"}}> 
            <Container>
                <Navbar.Brand href="#home">
                    <img  alt="" src={logo}  width="30"  height="30"  className="d-inline-block align-top"/>{' '}
                    AlgoVE
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Path Finding</Nav.Link>
                    <Nav.Link href="#pricing">Backtracking</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar><br /> */}
        </>
    )
}

