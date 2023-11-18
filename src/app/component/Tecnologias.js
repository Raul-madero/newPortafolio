import React from "react"


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
            <div className="row">
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
export default Tecnologias