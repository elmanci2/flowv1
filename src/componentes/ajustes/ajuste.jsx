import React from "react";
import "./ajustes.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ajustesimages from "../../img/ajustesimg.png";


export default function Ajustes() {

    useEffect(() => {

        const formulario = document.getElementById('contactForm');
        const registro = document.getElementById('contactForm');
        const exito = document.getElementById('envi');

        formulario.addEventListener('submit', async (e) => {
            e.preventDefault();


            const respuesta = await fetch('https://sheet.best/api/sheets/159930d5-4bad-4d98-aa61-28c2cd7dcbef', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    " Nombres": formulario.name.value,

                })
            });

            registro.style.display = "none"
            exito.style.display = "block"


        });



        const showModal = (openButton, modalContent) => {
            const openBtn = document.getElementById(openButton),
                modalContainer = document.getElementById(modalContent)

            if (openBtn && modalContainer) {
                openBtn.addEventListener('click', () => {
                    modalContainer.classList.add('show-modal')
                })
            }
        }
        showModal('open-modal', 'modal-container')

        const closeBtn = document.querySelectorAll('.close-modal')

        function closeModal() {
            const modalContainer = document.getElementById('modal-container')
            modalContainer.classList.remove('show-modal')
        }
        closeBtn.forEach(c => c.addEventListener('click', closeModal))



    })








    return (
        <section>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}

            >

                <div>
                    <div className="atras_segting">
                        <div classname="atras_item">
                            <h3 classname="el_logo">ajustes</h3>
                            <div className="imagenajustes">
                                <img src={ajustesimages} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="segting">
                        <div className="segting_item">
                            < Link to="/error" className="user_item">
                                <h3 className="item_tex">
                                    <i className=" item_1 fa-solid fa-screwdriver-wrench" />
                                    <span>
                                        reporta un error
                                    </span>
                                </h3>
                            </ Link>
                            <div className="user_item" id="open-modal">
                                <h3 className="item_tex">
                                    <i className=" item_2 bx bx-tv" />
                                    <span>
                                        pide una novela
                                    </span>
                                </h3>
                            </div>
                            <Link to='/buscar' href="  " className="user_item">
                                <h3 className="item_tex">
                                    <i className=" item_3 fa-solid fa-tv" />
                                    <span>
                                        todas las novelas
                                    </span>
                                </h3>
                            </Link>

                            <Link to="/politicas" className="user_item">
                                <h3 className="item_tex">
                                    <i className=" item_4 fa-solid fa-gavel" />
                                    <span>
                                        nuetras politicas
                                    </span>
                                </h3>
                            </Link>

                            <Link to='/nosotros' target="_blank" className="user_item">
                                <h3 className="item_tex">
                                    <i className=" item_5 fa-solid fa-users-line" />
                                    <span>
                                        mas sobre nosotros
                                    </span>
                                </h3>
                            </Link>

                            <a href="mailto:velanovelasgratis@gmail.com" className="user_item">
                                <h3 className="item_tex">
                                    <i className=" item_6 fa-solid fa-envelope-circle-check" />
                                    <span>
                                        contactanos
                                    </span>
                                </h3>
                            </a>

                        </div>
                    </div>



                    {/* modal div */}
                    <div className="modal__container" id="modal-container">
                        <div className="modal__content">
                            <div className="container_formulario">
                                <div className="alert" id="envi">
                                    <img className=" gif_recibido" src="https://admpanvini.com/img/sendmail.gif" alt />
                                    <h3 className="recibido">su peticion fue <span>recibida</span> </h3>
                                </div>
                                <form action id="contactForm">
                                    <div className="for_conted">
                                        <h1 className="for_title"> peticion </h1>
                                        <h3 className="form_text"> puedes pedir la novela que quieras </h3>
                                    </div>
                                    <div className="inputBox">
                                        <input type="text" id="name" placeholder="nombre de la novela " />
                                    </div>
                                    <div className="inputBox">
                                        <button type="submit">pedir</button>
                                    </div>
                                </form>
                            </div>
                            <button className="modal__button-link close-modal">
                                cerrar
                            </button>
                        </div>
                    </div>
                </div>

            </motion.div>



        </section>
    )
}
