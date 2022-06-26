import React from "react";
import Slider4 from "../sliders/slider4/slider4";
import Slider5 from "../sliders/slider5/slider5";
import Slider1 from "../sliders/slider1/Slider1";
import Slider2 from "../sliders/slider2/Slider2";
import Slider3 from "../sliders/Slider3/Slider3";

// seciones conted 
export default function SecionesAgregarNovelasr() {
    return (
        <section>

            {/*  slidernumero 1 encavesado  */}
            <main>
                <h1 className="subtitulos">
                    novelas extrenadas en 2022
                </h1>
                <Slider1 />
            </main>


            {/* slidr en emicion  */}
            <main>
                <h1 className="subtitulos">
                    novelas en emicion
                </h1>
                <Slider2 />
            </main>


            {/* slidert novelas de mucica  */}
            <main>
                <h1 className="subtitulos">
                    novelas de mucica
                </h1>
                <Slider3 />
            </main>


            {/* slider  noveñas mas vistas  */}
            <main>
                <h1 className="subtitulos">
                    novelas mas vista esta seman
                </h1>
                <Slider4 />
            </main>


            {/* cadenas de tv  */}
            <main>
                <h1 className="subtitulos">
                    cadenas de tv mas populares
                </h1>
                <Slider5 />
            </main>



        </section>
    )
}