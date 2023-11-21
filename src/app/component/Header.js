import React from "react"
import Image from "next/image"
import logo from '../../img/logo/logoDark.png'
import { Container, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Nav, NavLink } from "react-bootstrap"


const Header = () => {
    return (
        <Navbar expand="md" className="bg-secondary container-xl" sticky="top">
            <Container>
                <NavbarBrand href="/"><Image src={logo} width={300} height={30} alt="Logo" /></NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-bar"/>
                <NavbarCollapse id="basic-navbar-bar">
                    <Nav className="me-auto">
                        <NavLink href="about" className="text-white">Acerca de mi</NavLink>
                        <NavLink href="proyectos" className="text-white">Proyectos</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
)
}
export default Header