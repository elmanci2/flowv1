import React from "react";
import Slider1_1 from "../slider1/slider1_1/slider1_1";

import './slider5.css'


export default function Slider5() {
    
    const imagenslidr5 = 'https://www.telemundo.com/sites/nbcutelemundo/files/images/brand/promo/2018/09/26/10_telemundo_internacional_1920x1080_b2.jpg'
    return(

        <section>

            <nav className="slider5cintedprede">
                <div className="fondeslider5">
                    <div className="sombraslider5"></div>
                    <div className="sombraslider52"></div>
                    <img src={imagenslidr5} alt="" />
                        <div className="conted_itemslider5">
                           <div className="slider5_slider1_conted">
                             <h1 className="cadestv_tex">telemundo </h1>
                           <Slider1_1/>
                           </div>
                        </div>

                </div>
            </nav>

        </section>
    )


}

