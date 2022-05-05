import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

const MenuNavbar = () => (
    <Navbar
        color="light"
        expand="md"
        light
        className="mx-4"
    >
        <NavbarBrand href="/">
            BLAZE
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink href="/">
                        Orders
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/products">
                        Products
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
);

export default MenuNavbar;