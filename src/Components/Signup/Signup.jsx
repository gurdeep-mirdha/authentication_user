import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


const Signup = () => {
    return (
        <Container fluid="sm" className='d-inline text-center'>
            <Row className="justify-content-md-center">
                <Col sm={5} className='bg-light'>
                    <h4>Sign up</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="password" placeholder='Email' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder='Phone' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Password' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder='Confirm password' />
                        </Form.Group>
                        <Button type='submit' className='mb-2'>Sign up</Button>
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup
