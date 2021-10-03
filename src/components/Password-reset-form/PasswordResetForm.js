import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Card, Button, Spinner, Alert } from 'react-bootstrap'
// import { useHistory, useLocation } from 'react-router-dom'
// import { switchLoginResetPassForm } from '../../pages/admin-auth-slice/userSlice'
import { requestPassResetOTP } from '../../pages/admin-auth-slice/userAction'

const PasswordResetForm = () => {
  // const history = useHistory()
  // const location = useLocation()
  const dispatch = useDispatch()

  const { isPending, resetPasswordRequestResponse } = useSelector(
    (state) => state.user,
  )

  const [email, setEmail] = useState()

  useEffect(() => {}, [])

  const handleOnChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      return alert('email required')
    }

    dispatch(requestPassResetOTP(email))
  }

  return (
    <div className="login-page">
      <Card className="reg-form p-3">
        <h2 className="text-center">Reset Password</h2>
        {isPending && <Spinner variant="primary" animation="border" />}
        {resetPasswordRequestResponse.message && (
          <Alert
            variant={
              resetPasswordRequestResponse.status === 'success'
                ? 'success'
                : 'danger'
            }
          >
            {resetPasswordRequestResponse.message}
          </Alert>
        )}
        <hr />

        <Form className="mt-3" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button type="submit" variant="success">
            Request OTP
          </Button>
        </Form>
        <div className="ml-auto mt-3 text-end">
          <a href="/">Login Now</a>
        </div>
      </Card>
    </div>
  )
}

export default PasswordResetForm
