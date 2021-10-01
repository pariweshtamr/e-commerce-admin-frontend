import React, { useState } from 'react'
import { Form, Card, Button, InputGroup, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../admin-auth-slice/userAction'
import AdminLayout from '../Layout/AdminLayout'

const initialState = {
  fname: 'asdsd',
  lname: 'dfdaf',
  gender: '',
  dob: '',
  phone: '124354234',
  address: '123435',
  password: '987654321',
  confirmPassword: '987654321',
}
const Register = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialState)
  const [passwordError, setPasswordError] = useState('')

  const { isPending, userRegistrationResponse } = useSelector(
    (state) => state.user,
  )

  const handleOnSubmit = (e) => {
    //send form data to the server
    e.preventDefault()

    // check for the password confirmation
    const { confirmPassword, ...newUser } = user
    const { password } = user

    if (password !== confirmPassword) {
      setPasswordError('Password did not match!')
      return
    }

    dispatch(userRegister(newUser))
  }

  const handleOnChange = (e) => {
    // set value in the state
    const { name, value } = e.target

    //reset error msg
    passwordError && name === 'confirmPassword' && setPasswordError('')

    setUser({
      ...user,
      [name]: value,
    })
  }
  console.log(userRegistrationResponse)

  return (
    <AdminLayout>
      <div className="register-page mb-5">
        <Card className="reg-form p-3">
          <h2 className="text-center">Register new Admin User</h2>
          <hr />
          {isPending && <Spinner variant="primary" animation="border" />}

          {userRegistrationResponse?.message && (
            <Alert
              variant={
                userRegistrationResponse?.status === 'success'
                  ? 'success'
                  : 'danger'
              }
            >
              {userRegistrationResponse?.message}
            </Alert>
          )}
          <Form action="/" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">First Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="fname"
                placeholder="First Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Last Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="lname"
                placeholder="Last Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Gender</Form.Label>
              <InputGroup>
                <Form.Label className="genders">Male</Form.Label>
                <InputGroup.Radio
                  onChange={handleOnChange}
                  name="gender"
                  defaultValue="male"
                  aria-label="Male"
                />
                <Form.Label className="genders ms-3">Female</Form.Label>
                <InputGroup.Radio
                  onChange={handleOnChange}
                  name="gender"
                  defaultValue="female"
                  aria-label="Female"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">DOB</Form.Label>
              <Form.Control onChange={handleOnChange} name="dob" type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="email"
                type="email"
                placeholder="Email address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="phone"
                placeholder="041xxxxxxxx"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="address"
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                minLength="7"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Confirm Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                name="confirmPassword"
                type="password"
                required
              />
              {passwordError && <Alert variant="danger">{passwordError}</Alert>}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold">Message</Form.Label>
              <Form.Control onChange={handleOnChange} as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit" variant="success">
              Register
            </Button>
          </Form>
        </Card>
      </div>
    </AdminLayout>
  )
}

export default Register
