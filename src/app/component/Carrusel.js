'use client'
import React from "react"
import Image from "next/image"


const Carrusel = (props) => {
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
export default Carrusel