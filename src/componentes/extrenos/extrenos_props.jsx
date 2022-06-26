import React from "react";



export default function EXtrenosItem(props) {

    return (

        <section>


                <div className="todoconted">
                    <div className="primerconted">
                        <div className="fechs">
                            <span className="mes">{props.fecha1}.</span>
                            <span className="dia"> {props.dia} </span>
                        </div>


                        <div className="sinopsid">
                            <div className="poster_conted">
                                <img className="poster" src={props.poster} alt="" />
                            </div>

                            <div className="texconted">
                                <div className="estreno_titulo">
                                    <h1 className="titulo_estreno"> {props.title} </h1>
                                    <span className="estreno"> estreno el <span> {props.dia} </span> {props.fecha2} </span>
                                </div>
                             <div className="p_conted">
                             <p className="sinosis_tex"> {props.sinopsis} </p>
                             </div>
                            </div>
                        </div>

                    </div>
                </div>
          
        </section>
    )
}

