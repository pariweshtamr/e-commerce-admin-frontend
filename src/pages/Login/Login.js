import React from 'react'
import {Form, Card, Button} from 'react-bootstrap'


const Login = () => {
    return (
        <div className="register-page mb-5">
        <Card className="reg-form p-3">
        <h2>Admin Login</h2>
        <hr />
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="********" required />
            </Form.Group>
            <Button variant="success">Login</Button>
        </Form>

        <h5 className="text-center mt-5">No account?</h5>
        <a href="/registration" className="text-center">Register Now</a>
        </Card>
    </div>
    )
}

export default Login
