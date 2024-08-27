"use client";

import React from "react";
import logo from "@/images/logo.png";
import "./navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="gradient-transparent custom-navbar"
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand as={Link} href="home" className="custom-navbar-brand">
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "55px", height: "auto" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="custom-nav">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  href="/home"
                  className="custom-nav-link"
                  aria-current="page"
                  active
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  href="/team"
                  className="custom-nav-link"
                  aria-current="page"
                  active
                >
                  Team
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="Subsystems"
                id="basic-nav-dropdown"
                className="custom-nav-link"
                data-bs-theme="dark"
                active
              >
                <NavDropdown.Item as={Link} href="/subsystems/autonav">
                  AutoNav
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/subsystems/delivery">
                  Delivery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/subsystems/robotic_arm">
                  Robotic Arm
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/subsystems/science">
                  Science
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/subsystems/communication">
                  Communication
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/subsystems/business">
                  Business
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/subsystems/public_relations">
                  Public Relations
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  href="/sponsorships"
                  className="custom-nav-link"
                  aria-current="page"
                  active
                >
                  Sponsorships
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  href="/contact"
                  className="custom-nav-link"
                  aria-current="page"
                  active
                >
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
