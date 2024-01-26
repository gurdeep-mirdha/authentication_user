import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Login = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => navigate('/signup');

    const handleResetPasswordClick = () => navigate('/reset-password');

    const handleForgotPasswordClick = () => navigate('/forgot-password');
    return (
        <Container fluid="sm" className='d-inline text-center'>
            <Row className="justify-content-md-center">
                <Col sm={6} className='bg-light'>
                    <h4>Login</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='********' />
                        </Form.Group>
                        <Button type='submit' className='mb-2'>Login</Button>
                        <Row className='d-flex flex-row'>
                            <Col sm={5}>
                                 <Button variant="link" onClick={() => handleResetPasswordClick()}>Reset Password</Button>
                            </Col>
                            <Col sm={2}>
                                <Button variant="link" onClick={() => handleSignupClick()}>Signup</Button>
                            </Col>
                            <Col sm={5}>
                                <Button variant="link" onClick={() => handleForgotPasswordClick()}>Forgot Password</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
