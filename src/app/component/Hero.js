import React from "react"
const Hero = () => {
    return (
        <main className="hero container-xl align-items-start d-flex flex-column justify-content-center px-4 mb-5">
        <div>
            <h5 className="display-5 text-black-50">Hola!</h5>
            <h1 className="display-1 text-black">Soy <span className="text-uppercase fw-bold text-info">Raul</span></h1>
            <h3 className="display-3 text-black-50">Web developer</h3>
            <a href="sobreMi.html" className="btn btn-info text-primary">Acerca de mi</a>
        </div>
    </main>
    )
}
export default Hero