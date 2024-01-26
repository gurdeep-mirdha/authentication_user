import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Card, Row, Col } from 'react-bootstrap'
import { React, useState } from "react";



function BasicExample() {
    const [query, setQuery] = useState("")

    function search(e) {
        e.preventDefault()
        setQuery(e.target.value)


    }
    return (
        <Container>
            <Row>
                <Col className="p-6 bg-light border">
                    <Navbar expand="lg" className="bg-body-tertiary">

                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Add Item</Nav.Link>
                                <NavDropdown title="Cart" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Jackets
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col className="p-6 bg-light border">
                    <input
                        type="text"
                        className="w-full placeholder-gray-400 text-gray-900 p-4"
                        placeholder="Search"
                        onChange={search}
                        value={query}
                    />
                    <button className="bg-white p-4" ali>🔍</button>
                </Col>
            </Row>


            <Row className="justify-content-md-center">
                <h1>Products</h1>

                <Col className="p-4 bg-light border">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="p-4 bg-light border">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 2</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col className="p-4 bg-light border">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 3</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="p-4 bg-light border">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Product 4</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default BasicExample;