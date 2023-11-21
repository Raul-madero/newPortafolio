'use client'
import React from "react";
import Carrusel from './Carrusel'
import rockbandImg from '../../img/proyectos/rockBand.webp';
import blogDeCafeImg from '../../img/proyectos/blogDeCafe.webp';
import travelImg from '../../img/proyectos/travel.webp';

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

const Proyectos = () => {
    return (
        <section className="container-xl proyectos my-5">
        <div className="container-fluid text-center">
            <h2 className="my-4 mt-4">Algunos de mis Proyectos</h2>
            <div className="row">
                <div className="col"></div>
                    <Carrusel url={dataCarrusel.rockBand.url} img={rockbandImg} cardTitle={dataCarrusel.rockBand.cardTitle} description={dataCarrusel.rockBand.description} />
                    <div className="col"></div>
                    <Carrusel url={dataCarrusel.blogDeCafe.url} img={blogDeCafeImg} cardTitle={dataCarrusel.blogDeCafe.cardTitle} description={dataCarrusel.blogDeCafe.description} />
                    <div className="col"></div>
                    <Carrusel url={dataCarrusel.travel.url} img={travelImg} cardTitle={dataCarrusel.travel.cardTitle} description={dataCarrusel.travel.description} />
            </div>
        </div>
    </section>
    );
}
export default Proyectos