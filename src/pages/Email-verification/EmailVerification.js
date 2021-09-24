import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Spinner } from "react-bootstrap";
import { userEmailVerification } from "../admin-auth-slice/userAction";

const EmailVerification = () => {
  const dispatch = useDispatch();

  const params = new URLSearchParams(useLocation().search);
  const pin = params.get("pin");
  const email = params.get("email");
  const { isPending, userRegistrationResponse } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    //send pin adn email to api server
    dispatch(userEmailVerification({ pin, email }));
  }, [dispatch, pin, email]);
  return (
    <div className="m-auto mt-5 py-5" style={{ width: "500px" }}>
      {isPending && <Spinner variant="primary" animation="border" />}

      {userRegistrationResponse?.message && (
        <Alert
          variant={
            userRegistrationResponse?.status === "success"
              ? "success"
              : "danger"
          }
        >
          {userRegistrationResponse?.message}
        </Alert>
      )}

      {userRegistrationResponse?.message && <a href="/"> Login now</a>}
    </div>
  );
};

export default EmailVerification;
