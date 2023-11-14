import '../Sass/app.scss';
import Image from 'next/image';
import rockbandImg from '../img/rockBand.webp';
import blogDeCafeImg from '../img/blogDeCafe.webp';
import travelImg from '../img/travel.webp';

const dataCarrusel = {
    rockBand: {
        url: "https://raul-madero.github.io/rockband/",
        cardTitle: "Festival Musical",
        description: "Página de muestra creada por mi para curso Sass."
    },
    blogDeCafe: {
        url: "https://raul-madero.github.io/blogDeCafe/",
        cardTitle: "Blog de Café",
        description: "Blog de muestra creado por mi para curso de HTML."
    },
    travel: {
        url: "https://raul-madero.github.io/Travels/",
        cardTitle: "Agencia de viajes",
        description: "Página creada por mi para curso de Tailwind."
    },
}
const Header = () => {
  return (
    <header className="container-xl sticky-top bg-secondary bg-gradient z-3">
        <nav className="navbar navbar-expand-lg bg-body-primary">
            <div className="container-fluid justify-content-between">
                <a href="/" className="navbar-brand">Raul<strong>Madero</strong></a>
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
const Tecnologias = () => {
    let color = "#e67E22"
    return (
        <section className="container-xl tecnologias p-0">
        <div className="container-fluid text-center p-4 bg-dark w-100 tecnologias__over">
            <h2>Algunas Metodologias y Tecnologias con las que trabajo</h2>
            <div className="row">
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-html5 fa-2xl" style={{color}}></i>
                </div>
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-css3 fa-2xl" style={{color}}></i>
                </div>
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-js fa-2xl" style={{color}}></i>
                </div>
            </div>
            <div className="row">
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-bootstrap fa-2xl" style={{color}}></i>
                </div>
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-sass fa-2xl" style={{color}}></i>
                </div>
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-php fa-2xl" style={{color}}></i>
                </div>
            </div>
            <div class="row">
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-react fa-2xl" style={{color}}></i>
                </div>
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-python fa-2xl" style={{color}}></i>
                </div>
                <div className="col p-4 border border-info g-3 rounded-3 mx-2">
                    <i className="fa-brands fa-angular fa-2xl" style={{color}}></i>
                </div>
            </div> 
        </div>
    </section>
    )
}
const CarruselProyectos = (props) => {
    return (
        <>
            <div className="col-12 col-md-3 my-2">
                <a className='link-opacity-50 link-opacity-100-hover' href={props.url} target="blank">
                    <div className="card">
                        <Image 
                        style={{
                            width: '100%',
                            height: 'auto',
                            }} 
                        src={props.img}
                        alt='Imagen de festival musical'/>
                        <div className="card-body">
                            <h5 className="card-title">{props.cardTitle}</h5>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
const Proyectos = () => {
    return (
        <section class="container-xl proyectos my-5">
        <div class="container-fluid text-center">
            <h2 class="my-4 mt-4">Algunos de mis Proyectos</h2>
            <div class="row">
                <div className="col"></div>
                    <CarruselProyectos url={dataCarrusel.rockBand.url} img={rockbandImg} cardTitle={dataCarrusel.rockBand.cardTitle} description={dataCarrusel.rockBand.description} />
                    <div className="col"></div>
                    <CarruselProyectos url={dataCarrusel.blogDeCafe.url} img={blogDeCafeImg} cardTitle={dataCarrusel.blogDeCafe.cardTitle} description={dataCarrusel.blogDeCafe.description} />
                    <div className="col"></div>
                    <CarruselProyectos url={dataCarrusel.travel.url} img={travelImg} cardTitle={dataCarrusel.travel.cardTitle} description={dataCarrusel.travel.description} />
            </div>
        </div>
    </section>
    );
}
const Footer = () => {
    let color = '#fff'
    return (
        <footer className="container-xl bg-secondary p-5 footer">
        <div className="container-fluid p-3 text-center">
            <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="col align-items-center my-2 md-m-0">
                    <a href="https://walink.co/b43304" className="btn btn-info">Contactame</a>
                </div>
                <div className="col align-items-center my-2 md-m-0">
                    <a href="index.html" className="navbar-brand text-dark fs-1">Raul<strong class="text-info">Madero</strong></a>
                </div>
                <div className="col align-items-center my-2 md-m-0">
                    <div className="row align-items-center justify-content-center">
                        <div className="col align-items-center">
                            <a href="https://www.linkedin.com/in/raul-madero-28060548/" target="blank">
                                <i className="fa-brands fa-linkedin fa-2xl" style={{color}}></i>
                            </a>
                        </div>
                        <div className="col align-items-center">
                            <a href="https://github.com/Raul-madero" target="blank">
                                <i class="fa-brands fa-github fa-2xl" style={{color}}></i>
                            </a>
                        </div>
                        <div className="col align-items-center">
                            <a href="https://twitter.com/rmaderoIV" target="blank">
                                <i class="fa-brands fa-x-twitter fa-2xl" style={{color}}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}
export default function Home() {
  return (
    <>
        <Header />
        <Main />
        <Resumen />
        <Tecnologias />
        <Proyectos />
        <Footer />
        <script src="https://kit.fontawesome.com/89daf2435a.js" crossOrigin="anonymous" async></script>
    </>
  )
}
