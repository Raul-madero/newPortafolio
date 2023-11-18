import React from "react";

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
                    <a href="/" className="navbar-brand text-dark fs-1">Raul<strong className="text-info">Madero</strong></a>
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
                                <i className="fa-brands fa-github fa-2xl" style={{color}}></i>
                            </a>
                        </div>
                        <div className="col align-items-center">
                            <a href="https://twitter.com/rmaderoIV" target="blank">
                                <i className="fa-brands fa-x-twitter fa-2xl" style={{color}}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}
export default Footer