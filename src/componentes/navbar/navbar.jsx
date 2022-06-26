import React, { useEffect } from "react";
import "./navbar.css"
import { Link } from 'react-router-dom';
import "./navbar.css";
import Animacion from '../animacion-pagina/animacion';


export function Navbar() {



    useEffect(() => {
        const li = document.querySelectorAll('.item')
        li.forEach((cadaLi, i) => {
            li[i].addEventListener('click', () => {
                li.forEach((cadaLi, i) => {
                    li[i].classList.remove('active')
                })
                li[i].classList.add('active')
            })
        })
    })


    return (


        <section



        >

            <div className="navpadre">
                <nav className="navhijo">

                    <Link className='link ' to="/">
                        <div className="item active" >
                            <i className='bx bxs-home'></i>
                            <span>inicio</span>
                        </div>
                    </Link>

                    <Link className='link ' to="/buscar">
                        <div className="item " >
                            <i class='bx bx-search-alt'></i>
                            <span>buscar</span>
                        </div>
                    </Link>




                    <Link className='link' to="/estrenos">
                        <div className="item" >
                            <i class='bx bx-windows'></i>
                            <span>estrenos</span>
                        </div>
                    </Link>


                    <Link className='link' to="/ajustes">
                        <div className="item" >
                            <i class='bx bx-slider-alt'></i>
                            <span>ajustes</span>
                        </div>
                    </Link>

                </nav>


                <Animacion />

            </div>

        </section>



    );

}










