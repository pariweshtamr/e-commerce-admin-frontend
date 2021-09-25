import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userLogout } from "../../pages/admin-auth-slice/userAction";

const Header = () => {
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    dispatch(userLogout());
  };
  return (
    <>
      <Navbar collapseOnSelect bg="Light" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleOnLogout}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
