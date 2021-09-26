import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Card, Button, Spinner, Alert } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { adminLogin, autoLogin } from "../admin-auth-slice/userAction";

const initialState = {
  email: "a@a.com",
  password: "1234567",
};

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isLoggedIn, isPending, userLoginResponse } = useSelector(
    (state) => state.user
  );

  const [loginInfo, setLoginInfo] = useState(initialState);

  const from = location?.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    !isLoggedIn && dispatch(autoLogin());

    isLoggedIn && history.replace(from);
  }, [isLoggedIn, history, dispatch, from]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const { email, password } = loginInfo;

    // if (!email && !password) {
    //   return alert("You must provide both the email and password.");
    // }
    dispatch(adminLogin(loginInfo));
  };

  return (
    <div className="register-page">
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
      </Card>
    </div>
  );
};

export default Login;
