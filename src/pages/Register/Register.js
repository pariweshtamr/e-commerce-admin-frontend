import React, {useState} from 'react'
import {Form, Card, Button, InputGroup} from 'react-bootstrap'

const initialState = {
    fname:"",
    lname:"",
    gender:"",
    dob:"",
    phone:"",
    address:"",
    password:"",

}
const Register = () => {
    const [user, setUser] = useState(initialState)

    const handleOnSubmit = e => {

        //send form data to the server
    }

    const handleOnChange = e => {
        // set value in the state
    }
    return (
        <div className="register-page mb-5">
            <Card className="reg-form p-3">
            <h2>Register new Admin User</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="fname" placeholder="First Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lname" placeholder="Last Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <InputGroup>
                        <InputGroup.Radio name="gender" aria-label="Radio button for following text input">Male</InputGroup.Radio>
                        <InputGroup.Radio name="gender" aria-label="Radio button for following text input">Female</InputGroup.Radio>
                    </InputGroup> 
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control name="dob" type="date"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone" placeholder="041xxxxxxxx" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="secret" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="success">Register</Button>
            </Form>
            </Card>
        </div>
    )
}

export default Register
