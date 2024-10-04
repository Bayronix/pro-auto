import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./NavbarMenu.module.css";
import { FaCarBattery } from "react-icons/fa";

const NavbarMenu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Collapse
            className={styles.navBarContainer}
            id="basic-navbar-nav"
          >
            <Navbar.Brand href="/">
              <FaCarBattery size={60} />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link
                href="/"
                className={`${styles.navLink} ${styles.navLinkHover}`}
              >
                Company
              </Nav.Link>

              <Nav.Link
                href="/Services"
                className={`${styles.navLink} ${styles.navLinkHover}`}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/Information"
                className={`${styles.navLink} ${styles.navLinkHover}`}
              >
                Information
              </Nav.Link>
              <Nav.Link
                href="/Contacts"
                className={`${styles.navLink} ${styles.navLinkHover}`}
              >
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
