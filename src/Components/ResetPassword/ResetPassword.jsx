import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => navigate('/singup');

    const handleLoginClick = () => navigate('/login')

    const handleForgotPasswordClick = () => navigate('/forgot-password');

  return (
    <Container fluid="sm" className='d-inline text-center'>
            <Row className="justify-content-md-center">
                <Col sm={5} className='bg-light'>
                    <h4>Reset Password</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Old password</Form.Label>
                            <Form.Control type="password" placeholder='*******' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" placeholder='*******' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Cofirm new password</Form.Label>
                            <Form.Control type="password" placeholder='*******' />
                        </Form.Group>
                        <Button type='submit' className='mb-2'>Reset</Button>
                        <Row className='d-flex flex-row'>
                            <Col sm={5}>
                                <Button variant="link" onClick={() => handleSignupClick()}>Signup</Button>
                            </Col>
                            <Col sm={2}>
                                <Button variant="link" onClick={() => handleLoginClick()}>Login</Button>
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

export default ResetPassword
