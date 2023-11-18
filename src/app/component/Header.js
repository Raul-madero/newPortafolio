import React from "react"
import Image from "next/image"
import logo from '../../img/logo/logoDark.png'

const Header = () => {
    return (
    <header className="container-xl sticky-top bg-secondary bg-gradient z-3">
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid justify-content-between">
                <a href="/" className="navbar-brand"><Image src={logo} alt="Logo" width={200} /></a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a href="/about" className="nav-link text-primary">Acerca de mi</a>
                        </li>
                        <li className="nav-item">
                            <a href="/proyects" className="nav-link text-primary">Proyectos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)
}
export default Header