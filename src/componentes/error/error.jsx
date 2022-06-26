import React, { useEffect } from "react";

import './error.css'
import error from '../../img/error.png'
import { motion } from "framer-motion";

export default function Erorr() {



    return (

        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}


        >

            <section>


                <div className="container_error">

                    <div className="ifo_error">

                        <div className="sub_conted_error">
                            <div className="tex_error_conted">
                                <h1>reportar un errro </h1>
                                <h3>
                                    porfavor  dar todos los detalles sobre el error,
                                    para poder solucionarlo lo mas rapido posibel
                                </h3>

                            </div>

                            <div className="error_img">
                                <img src={error} alt="" />
                            </div>

                        </div>
                    </div>
                </div>


                <div className="formularioFuncional">


                    <h1 className="formulario_tex"> cul es el error</h1>


                    <form className="formcontainer" target="_blank" action="https://formsubmit.co/mancillaandres7@gmail.com" method="POST">
                        <div className="form-group">

                       
                        <input type="hidden" name="_webhook" value=""/>

                            <div className="form-row">

                                <div className="col">

                                    <input type="tex" name="email" className="form-control  inputformulario" placeholder=" nombre de la novela " required />


                                </div>


                            </div>
                        </div>


                        <div className="form-group">
                            <textarea placeholder="  describe el error con detalles..... " className="form-control  tex_ares" name="message" rows={10} required defaultValue={""} />
                        </div>

                        <div className="sudmit_container">
                            <button type="submit" className="btn btn-lg btn-dark btn-block" id="subminForm">enviar</button>
                        </div>

                    </form>
                </div>







            </section>

        </motion.div>
    )
}