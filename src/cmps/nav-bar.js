import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { ImUsers} from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { onLogout } from '../store/actions/user.actions'
import { CgFileDocument } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const user = useSelector(state => state.userModule.user)
  const dispatch = useDispatch()

  useEffect(() => {

  }, [user])

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          Toyzzz.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/chart"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Charts
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/toy"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Toys
              </Nav.Link>
            </Nav.Item>
      {/* <div className="auth-container">
          {!user && <NavLink className="auth-link" to="/signUp">Sign Up</NavLink>} 
          {!user && <NavLink className="auth-link" to="/login">Log In</NavLink>}
      </div> */}
        {!user && <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        <ImUsers style={{ marginBottom: "2px" }} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
      
        <Dropdown.Item href="#/signUp">Sign Up</Dropdown.Item>
        <Dropdown.Item href="#/login">Log In</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> }
      {user && 
      <div className="log-out">
      <span>Hello {user.fullname}</span>
      <button onClick={() => dispatch(onLogout())}>Log Out</button>
      </div>
      }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
