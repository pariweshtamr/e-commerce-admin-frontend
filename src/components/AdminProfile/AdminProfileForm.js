import React, { useState, useEffect } from 'react'
import {
  Form,
  InputGroup,
  Spinner,
  Button,
  ListGroup,
  Alert,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  updateProfileUser,
  updatePasswordUser,
} from '../../pages/admin-auth-slice/userAction'

const initialProfileState = {
  fname: '',
  lname: '',
  gender: '',
  dob: '',
  phone: '',
  address: '',
}

// update admin profile
export const AdminProfileForm = () => {
  const dispatch = useDispatch()

  const [adminProfile, setAdminProfile] = useState(initialProfileState)

  const { userInfo, isPending, userUpdateResponse } = useSelector(
    (state) => state.user,
  )

  useEffect(() => {
    setAdminProfile(userInfo)
  }, [userInfo])

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const { email, phone, address } = adminProfile

    if (
      userInfo.email !== email ||
      userInfo.phone !== phone ||
      userInfo.address !== address
    ) {
      if (window.confirm('Are you sure you want to make these changes?')) {
        const update = {
          email,
          phone,
          address,
        }
        dispatch(updateProfileUser(update))
      }
      return
    }
    return alert('No information has been changed')
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setAdminProfile({
      ...adminProfile,
      [name]: value,
    })
  }
  return (
    <div className="admin-profile-page">
      <h2>Welcome {userInfo.fname}!</h2>
      <hr />
      {isPending && <Spinner variant="primary" animation="border" />}

      {userUpdateResponse?.message && (
        <Alert
          variant={
            userUpdateResponse?.status === 'success' ? 'success' : 'danger'
          }
        >
          {userUpdateResponse?.message}
        </Alert>
      )}
      <Form action="/" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">First Name</Form.Label>
          <Form.Control
            // onChange={handleOnChange}
            name="fname"
            value={adminProfile.fname}
            placeholder="First Name"
            required
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Last Name</Form.Label>
          <Form.Control
            // onChange={handleOnChange}
            name="lname"
            placeholder="Last Name"
            required
            value={adminProfile.lname}
            disabled
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
              checked={adminProfile.gender === 'Male'}
              aria-label="Male"
              disabled
            />
            <Form.Label className="genders ms-3">Female</Form.Label>
            <InputGroup.Radio
              onChange={handleOnChange}
              name="gender"
              checked={adminProfile.gender === 'Female'}
              defaultValue="female"
              aria-label="Female"
              disabled
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">DOB</Form.Label>
          <Form.Control
            // onChange={handleOnChange}
            value={adminProfile?.dob?.substr(0, 10)}
            disabled={adminProfile.dob}
            name="dob"
            // type="date"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">
            Email *{' '}
            {adminProfile.isEmailConfirmed ? (
              <i
                title="verified email"
                className="fas fa-check-circle text-success"
              ></i>
            ) : (
              <i
                title="email not verified"
                className="fas fa-times-circle text-danger"
              ></i>
            )}
          </Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="email"
            type="email"
            placeholder="Email address"
            required
            value={adminProfile.email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Phone</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="phone"
            placeholder="04xxxxxxxxx"
            value={adminProfile.phone}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="address"
            placeholder="Address"
            value={adminProfile.address}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bold">Message</Form.Label>
          <Form.Control onChange={handleOnChange} as="textarea" rows={3} />
        </Form.Group>
        <div className="d-grip gap-2">
          <Button type="submit" variant="info" size="lg">
            Update Profile
          </Button>
        </div>
      </Form>
    </div>
  )
}

// UPDATE PASSWORD

const initialPassword = {
  currentPassword: '',
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

export const AdminPasswordResetForm = () => {
  const dispatch = useDispatch()

  const [updatePass, setUpdatePass] = useState(initialPassword)
  const [passError, setPassError] = useState(passErrorInitial)

  const { isPending, userUpdateResponse } = useSelector((state) => state.user)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const { currentPassword, password } = updatePass
    dispatch(updatePasswordUser({ currentPassword, password }))
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    // validation testing

    //
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
    <div>
      {isPending && <Spinner variant="primary" animation="border" />}``
      {userUpdateResponse?.message && (
        <Alert
          variant={
            userUpdateResponse?.status === 'success' ? 'success' : 'danger'
          }
        >
          {userUpdateResponse?.message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Current Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            minLength="7"
            name="currentPassword"
            type="password"
            placeholder="Enter current password"
            required
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
          {/* {passwordError && <Alert variant="danger">{passwordError}</Alert>} */}
        </Form.Group>

        <ListGroup>
          <h5>Password Rules</h5>
          <ListGroup.Item variant={passError.isMatched ? 'success' : 'danger'}>
            Password match
          </ListGroup.Item>
          <ListGroup.Item variant={passError.isLengthy ? 'success' : 'danger'}>
            must be atleast 7 characters
          </ListGroup.Item>
          <ListGroup.Item variant={passError.hasNumber ? 'success' : 'danger'}>
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
            must include one of the following special characters i.e. . ! @ # $
            % ^ & * _ ( )
          </ListGroup.Item>
        </ListGroup>
        <div className="d-grip gap-2 mt-3">
          <Button
            variant="warning"
            type="submit"
            size="lg"
            disabled={Object.values(passError).includes(false)}
          >
            Update Password
          </Button>
        </div>
      </Form>
    </div>
  )
}
