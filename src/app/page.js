import '../Sass/app.scss'

const Header = () => {
  return (
    <header className="container-xl sticky-top bg-secondary bg-gradient z-3">
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid justify-content-between">
                <a href="index.html" className="navbar-brand">Raul<strong>Madero</strong></a>
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
                            <a href="index.html" className="nav-link text-primary">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="sobreMi.html" className="nav-link text-primary">Acerca de mi</a>
                        </li>
                        <li className="nav-item">
                            <a href="servicios.html" className="nav-link text-primary">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a href="proyectos.html" className="nav-link text-primary">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a href="contacto.html" className="nav-link text-primary">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
const Main = () => {
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
const Resumen = () => {
    return (
        <section className="container-xl d-flex gap-5 my-4">
        <div className="perfil-info">
            <h5 className="display-5 fw-light">Acerca de mi,</h5>
            <h1 className="display-1">Soy <span className="text-uppercase fw-bold">Raul</span></h1>
            <p>Soy un estudiante apasionado de programación con una mente analítica, lógica y pragmática. Mi enfoque meticuloso y mi habilidad para resolver problemas me han permitido destacarme en el mundo de la programación. Siempre he sido alguien que disfruta enfrentando desafíos y encontrando soluciones innovadoras y efectivas.</p>
        </div>
        <div className="perfil">
        </div>
    </section>
    )
}
export default function Home() {
  return (
    <div className="bg-dark text-success">
        <Header />
        <Main />
        <Resumen />
    </div>
  )
}
