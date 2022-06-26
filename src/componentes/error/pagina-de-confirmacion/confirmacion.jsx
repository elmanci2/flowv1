import React from "react";
import  './confirmacion.css'

const recibido_imagen = 'https://thumbs.gfycat.com/NegligiblePaltryCorydorascatfish-max-1mb.gif'


export default function Confirmacion() {
    return(
        <section  className="confirmacionPadreConted">

            <div className="conted_recibido">
                <h1>mensaje recibido </h1>
                <p>emos recibido tu error  lo solucionaremos lo mas rapido pocible , gracias por por informarnos </p>
                <img src={recibido_imagen} alt=" gif mensage recibido " />
            </div>

        </section>
    )
}