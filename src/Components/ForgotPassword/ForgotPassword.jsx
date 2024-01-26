import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const ForgotPassword = () => {
  return (
    <Container fluid="sm" className='d-inline text-center'>
            <Row className="justify-content-md-center">
                <Col sm={4} className='bg-light'>
                    <h4>Forgot Password</h4>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Enter your email</Form.Label>
                            <Form.Control type="password" placeholder='Enter your email' />
                        </Form.Group>
                        <Button type='submit' className='mb-2'>Send password link</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  )
}

export default ForgotPassword
