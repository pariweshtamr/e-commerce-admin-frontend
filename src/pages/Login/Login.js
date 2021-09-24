import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Card, Button, Spinner, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../admin-auth-slice/userAction";

const initialState = {
  email: "a@a.com",
  password: "1234567",
};

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn, isPending, userLoginResponse } = useSelector(
    (state) => state.user
  );

  const [loginInfo, setLoginInfo] = useState(initialState);

  useEffect(() => {
    isLoggedIn && history.push("/dashboard");
  }, [isLoggedIn, history]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email && !password) {
      return alert("You must provide both the email and password.");
    }
    dispatch(adminLogin(loginInfo));
  };
  return (
    <div className="register-page mb-5">
      <Card className="reg-form p-3">
        <h2 className="text-center">Admin Login</h2>
        {isPending && <Spinner variant="primary" animation="border" />}
        {userLoginResponse.message && (
          <Alert
            variant={
              userLoginResponse.status === "success" ? "success" : "danger"
            }
          >
            {userLoginResponse.message}
          </Alert>
        )}
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              value={loginInfo.email}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="********"
              required
              value={loginInfo.password}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Login
          </Button>
        </Form>

        <h5 className="text-center mt-5">No account?</h5>
        <a href="/registration" className="text-center">
          Register Now
        </a>
      </Card>
    </div>
  );
};

export default Login;