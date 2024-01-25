import { NavLink } from 'react-router-dom'
import burgerMenu from '../../assets/images/icon-menu.svg'
import iconCar from '../../assets/images/Shopping.svg'
import search from '../../assets/images/search-icon.svg'
import logo from '../../assets/images/academit-logo.svg'
import closeBtn from '../../assets/images/icon-menu-close.svg'
import { useState } from 'react'

export const NavBar = () => {
    const [menuClicked, setMenuClicked] = useState(true)

    const handleClick = () => {
        setMenuClicked(prevState => !prevState)
    }
    return (
        <nav className='flex dark:bg-white items-center gap-4 p-4 '>
            <div className='hidden md:flex gap-4 flex-grow items-center'>
                <NavLink to='/' className=''>
                    <img src={logo} alt="logo" className='cursor-pointer' />

                </NavLink>

                <NavLink to='/' className={`${menuClicked ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
                    <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={handleClick} alt="" />
                </NavLink>
                <NavLink to='/categories'>
                    <button className="p-2 rounded-md  font-lexend text-LoginText hover:text-[#313173] lg:text-[20px] md:text-[16px]">
                        Categorías
                    </button>
                </NavLink>

                <NavLink to='/price'>
                    <button className="p-2 rounded-md text-gray-800 font-lexend  bg-BGLoginText hover:text-[#313173]
                        lg:text-[20px] md:text-[16px]">
                        Precios
                    </button>
                </NavLink>
                <NavLink to='/contact'>
                    <button className='p-2 rounded-md text-gray-800 font-lexend  bg-BGLoginText hover:text-[#313173]
                        lg:text-[20px] md:text-[16px]'>
                        Contáctanos
                    </button>
                </NavLink>
            </div>
            <div className='hidden md:flex gap-4 flex-none items-center '>
                <img className="w-8 h-9 cursor-pointer" src={search} alt="Car" />
                <NavLink to='/car'>
                    <img className="w-20 h-9 cursor-pointer" src={iconCar} alt="Car" />
                </NavLink>

                <NavLink to='/login'>
                    <button className="border-2 border-[#313173] rounded-md p-2 
                    font-semibold font-lexend text-[#313173] lg:text-[20px]
                    hover:text-white hover:bg-[#313173]
                    ">Iniciar sesión</button>
                </NavLink>

                <NavLink to='/register'>
                    <button className="border-2 border-[#313173] bg-[#313173] rounded-md p-2 font-semibold font-lexend text-white hover:text-[#313173] hover:bg-white
                    ">Regístrate</button>
                </NavLink>
            </div>
            <img className="w-10 h-4 cursor-pointer md:hidden" src={burgerMenu} alt="Menu" />
        </nav>

    )
}
