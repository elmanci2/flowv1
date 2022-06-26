import React, { useEffect } from "react";
import "./inicio.css"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SecionesAgregarNovelasr from "../secionescontainer/secionesHome";




// cambiar banner imagen 


const imagen = "https://imgstories.noticiasrcn.com/historias/wp-content/uploads/2022/05/10141024/9-2.jpg"
const urle_banner = 'https://vela-novelas-gratis.blogspot.com/p/hasta-que-la-plata-nos-separe-2022.html'


// export  banner inicio 

export default function Inicio() {

    useEffect(() => {
        const header_sticky = document.getElementById("stikimenu_id")
        window.onscroll = function () {
            addHeaderSticky()
        }
        function addHeaderSticky() {
            if (window.pageYOffset === 0) {
                header_sticky.classList.remove("stiki")
            } else {
                header_sticky.classList.add("stiki")
            }
        }
    })

    return (

        <section className="contenedor">
            {/* comensa la anumacin  */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
            >

                {/* sun menu de navegacion  */}

                <header >
                    <div className="menu_pegajoso  lolo " id="stikimenu_id">
                        <div className="pejajoso_conted">
                            <ul className="menupejajosolist">
                                <Link to="/estrenos">
                                    <li>estrenos </li>
                                </Link>
                                <Link to="/buscar">
                                    <li>buscar</li>
                                </Link>
                                <Link to="/ajustes">
                                    <li>ajustes</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="banner">
                    <div className="imagen">
                        <img src={imagen} alt="" />
                    </div>
                    <div className="lista">
                        <ul>
                            <div className="lis_centro">
                                <li><span>romanc</span></li>
                                <li><span>novela</span></li>
                                <li><span>colombia</span></li>
                                <li><span>2020</span></li>

                            </div>
                        </ul>
                    </div>

                    <div className="play_conted">

                        <div className="extra">
                            <i class='bx bx-plus'>  </i>
                            <span className="tex_extra"> mi lista </span>
                        </div>
                        <div className="play">
                            <i className='bx bx-play'> </i>
                            <a href={urle_banner}> <span >reproducir</span></a>
                        </div>
                        <div className="extra">
                            <i class='bx bx-error-circle'></i>
                            <span className="tex_extra">informacion</span>
                        </div>

                    </div>
                    <div className="sombra"></div>
                </div>


                {/* seciones componed export  */}

                <SecionesAgregarNovelasr/>




                {/* fin sections export  */}

            </motion.div>

        </section >
    )
}