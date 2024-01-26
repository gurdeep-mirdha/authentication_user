import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Profile = () => {
    return (
        <Container className="container-xl px-4 mt-4">
            <nav className="nav nav-borders">
                <a className="nav-link active ms-0" href="" target="__blank">Dashboard</a>
                <a className="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Reports</a>
            </nav>
            <hr className="mt-0 mb-4" />
            <Row>
                <Col className="col-xl-4">
                    <Card className="card mb-4 mb-xl-0">
                        <Card className="card-header">Profile Picture</Card>
                        <Card className="card-body text-center">
                            <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="test" />
                            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            <button className="btn btn-primary" type="button">Upload new image</button>
                        </Card>
                    </Card>
                </Col>
                <Col className="col-xl-8">
                    <Card className="card mb-4">
                        <Card className="card-header">Account Details</Card>
                        <Card className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputUsername">Name</label>
                                    <input className="form-control" id="inputUsername" type="text" placeholder="Enter your name" value="" />
                                </div>
                                <Row className="row gx-3 mb-3">
                                    <Col className="col-md-6">
                                        <label className="small mb-1" for="inputExamination">Examination</label>
                                        <input className="form-control" id="inputExamination" type="text" placeholder="Examination" value="" />
                                    </Col>
                                    <Col className="col-md-6">
                                        <label className="small mb-1" for="inputLastName">Last name</label>
                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna" />
                                    </Col>
                                </Row>
                                <Row className="row gx-3 mb-3">
                                    <Col className="col-md-6">
                                        <label className="small mb-1" for="inputOrgName">Organization name</label>
                                        <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap" />
                                    </Col>
                                    <Col className="col-md-6">
                                        <label className="small mb-1" for="inputLocation">Location</label>
                                        <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" />
                                    </Col>
                                </Row>
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
                                </div>
                                <Row className="row gx-3 mb-3">
                                    <Col className="col-md-6">
                                        <label className="small mb-1" for="inputPhone">Phone number</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
                                    </Col>
                                    <Col className="col-md-6">
                                        <label className="small mb-1" for="inputBirthday">Birthday</label>
                                        <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988" />
                                    </Col>
                                </Row>
                                <button className="btn btn-primary" type="button">Save changes</button>
                            </form>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile
