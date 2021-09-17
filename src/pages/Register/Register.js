import React, {useState} from 'react'
import {Form, Card, Button, InputGroup, Alert} from 'react-bootstrap'

const initialState = {
    fname:"",
    lname:"",
    gender:"",
    dob:"",
    phone:"",
    address:"",
    password:"",
    confirmPassword: "",
}
const Register = () => {
    const [user, setUser] = useState(initialState)
    const[passwordError, setPasswordError] = useState("")

    const handleOnSubmit = e => {
        //send form data to the server
        e.preventDefault()

        // check for the password confirmation
        const {password, confirmPassword} = user

    password !== confirmPassword && setPasswordError("Password did not match!")
    }

    const handleOnChange = e => {
        // set value in the state
        const { name, value } = e.target

        //reset error msg
        passwordError && name === "confirmPassword" && setPasswordError("")

        setUser({
            ...user,
            [name]: value,
        })
        console.log(user)
    }
    return (
        <div className="register-page mb-5">
            <Card className="reg-form p-3">
            <h2>Register new Admin User</h2>
            <hr />
            <Form action="/" onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control onChange={handleOnChange} name="fname" placeholder="First Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Last Name</Form.Label>
                    <Form.Control onChange={handleOnChange} name="lname" placeholder="Last Name" required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Gender</Form.Label>
                        <InputGroup>
                            <Form.Label className="genders">Male</Form.Label>
                                <InputGroup.Radio onChange={handleOnChange} name="gender" defaultValue="male" 
                                aria-label="Male" className="radio" />
                            <Form.Label className="genders ms-3">Female</Form.Label>
                                <InputGroup.Radio onChange={handleOnChange} name="gender" defaultValue="female" aria-label="Female" className="radio" />
                        </InputGroup> 
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">DOB</Form.Label>
                    <Form.Control onChange={handleOnChange} name="dob" type="date"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control onChange={handleOnChange} name="email" type="email" placeholder="Email address" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone</Form.Label>
                    <Form.Control onChange={handleOnChange} name="phone" placeholder="041xxxxxxxx" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Address</Form.Label>
                    <Form.Control onChange={handleOnChange} name="address" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="********" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Confirm Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="confirmPassword" type="password" required />
                    {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control onChange={handleOnChange} as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" variant="success">Register</Button>
            </Form>
            </Card>
        </div>
    )
}

export default Register
