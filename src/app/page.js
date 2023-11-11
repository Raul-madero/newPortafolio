import 'bootstrap/dist/css/bootstrap.min.css';

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
export default function Home() {
  return (
    <Header />
  )
}
