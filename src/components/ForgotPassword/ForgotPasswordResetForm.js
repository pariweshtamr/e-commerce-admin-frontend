import { useState } from 'react'
import { Alert, Form, ListGroup, Spinner, Button, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { resetPasswordAction } from '../../pages/admin-auth-slice/userAction'

const initialPassword = {
  otp: '',
  password: '',
  confirmPassword: '',
}
const passErrorInitial = {
  isMatched: false,
  isLengthy: false,
  hasLowerCase: false,
  hasUpperCase: false,
  hasNumber: false,
  hasSpecialChar: false,
}
export const ForgotPasswordResetForm = () => {
  const dispatch = useDispatch()

  const [updatePass, setUpdatePass] = useState(initialPassword)
  const [passError, setPassError] = useState(passErrorInitial)

  const {
    isPending,
    resetPasswordRequestResponse,
    passwordResettingEmail,
  } = useSelector((state) => state.user)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const { otp, password } = updatePass
    const passObj = {
      otp,
      email: passwordResettingEmail,
      password,
    }
    dispatch(resetPasswordAction(passObj))
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    // validation testing
    let isMatched = false
    if (name === 'password') {
      setPassError({
        ...passError,
        isMatched: updatePass.confirmPassword === value,
      })
    }

    if (name === 'confirmPassword') {
      isMatched = updatePass.password === value
      const isLengthy = value.length >= 7
      const hasLowerCase = /[a-z]/.test(value)
      const hasUpperCase = /[A-Z]/.test(value)
      const hasNumber = /[0-9]/.test(value)
      const hasSpecialChar = /[., !, @, #, $, %, ^, &, *, _, (, )]/.test(value)

      setPassError({
        ...passError,
        isMatched,
        isLengthy,
        hasLowerCase,
        hasUpperCase,
        hasNumber,
        hasSpecialChar,
      })
    }

    setUpdatePass({
      ...updatePass,
      [name]: value,
    })
  }

  return (
    <div className="reset-page">
      <Card className="p-3 reg-form">
        <h3 className="text-center py-2">Reset Password</h3>
        <hr />
        {isPending && <Spinner variant="primary" animation="border" />}
        {resetPasswordRequestResponse?.message && (
          <Alert
            variant={
              resetPasswordRequestResponse?.status === 'success'
                ? 'success'
                : 'danger'
            }
          >
            {resetPasswordRequestResponse?.message}
          </Alert>
        )}
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">OTP</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              minLength="6"
              value={updatePass.otp}
              name="otp"
              placeholder="Enter OTP"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">New Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              minLength="7"
              name="password"
              type="password"
              value={updatePass.password}
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
              value={updatePass.confirmPassword}
              placeholder="Confirm Password"
              required
            />
            {/* {passwordError && <Alert variant="danger">{passwordError}</Alert>} */}
          </Form.Group>

          <ListGroup>
            <h5>Password Rules</h5>
            <ListGroup.Item
              variant={passError.isMatched ? 'success' : 'danger'}
            >
              Password match
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.isLengthy ? 'success' : 'danger'}
            >
              must be atleast 7 characters
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasNumber ? 'success' : 'danger'}
            >
              must include number
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasUpperCase ? 'success' : 'danger'}
            >
              must include uppercase
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasLowerCase ? 'success' : 'danger'}
            >
              must include lowercase
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasSpecialChar ? 'success' : 'danger'}
            >
              must include one of the following special characters i.e. . ! @ #
              $ % ^ & * _ ( )
            </ListGroup.Item>
          </ListGroup>
          <div className="d-grip gap-2 mt-3">
            <Button
              variant="warning"
              type="submit"
              size="lg"
              disabled={Object.values(passError).includes(false)}
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}
