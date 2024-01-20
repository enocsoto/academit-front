import Logo from '../../assets/images/academit-logo-white.svg'
import social from '../../assets/images/socials.svg'

import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer className="p-4 bg-gray-950 text-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <nav className=" p-2">
                    <Link to='/'>
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div className='pt-3'>
                        <img src={social} alt="socials" className='pt-2 pb-3' />
                        <p>“Academit, <span className='text-[#313173] font-semibold p-2'>programamos</span> la <span className='text-[#313173] font-semibold'>elite </span> del mañana.”</p>
                    </div>

                </nav>
                <nav className="font-lexend font-normal max-w-7xl mx/auto p-2">
                    <div className="sm:text-[17px]">
                        <h4>Academit</h4>
                        <ul>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">Aviso de privacidad</li>
                            </Link>
                            <Link to='/contact'>
                                <li className="sm:text-[16px] ">Contacto</li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">Cursos</li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">Términos y condiciones</li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Florida 556, piso 3 - Ciudad Autónoma de Buenos Aires </li>
                            </Link>
                        </ul>
                    </div>


                </nav>
                <nav className="font-lexend font-normal max-w-7xl mx/auto p-2">
                    <div className="sm:text-[17px]">
                        <h4>Planes de estudio</h4>
                        <ul>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Desarrollador Backend</li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Desarrollador Javascript</li>

                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Introducción a la programación</li>

                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Desarrollador Web</li>

                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Bases de datos</li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Desarrollador Python </li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Especialidad en React js </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
                <nav className="font-lexend font-normal max-w-7xl mx/auto p-2">
                    <div className="sm:text-[17px]">
                        <h4>Links</h4>
                        <ul>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    ¿Quiénes somos? </li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Blog </li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    Configuración de cookies </li>
                            </Link>
                            <Link to='/'>
                                <li className="sm:text-[16px] ">
                                    academit.sas@academit.com.co </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </footer>
            <p className="p-5 bg-gray-950 text-white text-center">© Academit 2024. Todos los derechos reservados.</p>
        </>

    )
}
