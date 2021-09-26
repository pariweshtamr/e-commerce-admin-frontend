import React, { useState, useEffect } from "react";
import { Form, InputGroup, Spinner, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileUser } from "../../pages/admin-auth-slice/userAction";

const initialProfileState = {
  fname: "",
  lname: "",
  gender: "",
  dob: "",
  phone: "",
  address: "",
};

export const AdminProfileForm = () => {
  const dispatch = useDispatch();

  const [adminProfile, setAdminProfile] = useState(initialProfileState);

  const { userInfo, isPending } = useSelector((state) => state.user);

  useEffect(() => {
    setAdminProfile(userInfo);
  }, [userInfo]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { email, phone, address } = adminProfile;

    if (
      userInfo.email !== email ||
      userInfo.phone !== phone ||
      userInfo.address !== address
    ) {
      if (window.confirm("Are you sure you want to make these changes?")) {
        console.log("TODO call api to update the user");

        const update = {
          email,
          phone,
          address,
        };
        dispatch(updateProfileUser(userInfo));
      }
      return;
    }
    return alert("No information has been changed");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setAdminProfile({
      ...adminProfile,
      [name]: value,
    });
  };
  return (
    <div className="admin-profile-page">
      <h2>Welcome {userInfo.fname}!</h2>
      <hr />
      {isPending && <Spinner variant="primary" animation="border" />}

      {/* {userRegistrationResponse?.message && (
        <Alert
          variant={
            userRegistrationResponse?.status === "success"
              ? "success"
              : "danger"
          }
        >
          {userRegistrationResponse?.message}
        </Alert>
      )} */}
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
              checked={adminProfile.gender === "Male"}
              aria-label="Male"
              disabled
            />
            <Form.Label className="genders ms-3">Female</Form.Label>
            <InputGroup.Radio
              onChange={handleOnChange}
              name="gender"
              checked={adminProfile.gender === "Female"}
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
            Email *{" "}
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
  );
};

export const AdminPasswordResetForm = () => {
  const dispatch = useDispatch();

  const { userInfo, isPending } = useSelector((state) => state.user);
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
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
        <div className="d-grip gap-2">
          <Button variant="warning" type="submit">
            Update Password
          </Button>
        </div>
      </Form>
    </div>
  );
};
