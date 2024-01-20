import { NavLink } from 'react-router-dom'
import burgerMenu from '../../assets/images/icon-menu.svg'
import iconCar from '../../assets/images/Shopping.svg'
import search from '../../assets/images/search-icon.svg'

export const NavBar = () => {
    return (
        <>
            <nav className='flex place-content-between'>
                <div className='hidden sm:flex 
                lg:text-[20px] 
                md:text-[16px] 
                sm:items-center font-lexend pr-10 gap-4 
            '>
                    <NavLink to='/categories'>
                        <button className="p-2 rounded-md text-LoginText hover:text-[#313173]">
                            Categorías
                        </button>
                    </NavLink>

                    <NavLink to='/price'>
                        <button className="p-2 rounded-md text-gray-800 font-lexend  bg-BGLoginText hover:text-[#313173]">
                            Precios
                        </button>
                    </NavLink>
                    <NavLink to='/contact'>
                        <button className='p-2 rounded-md text-gray-800 font-lexend  bg-BGLoginText hover:text-[#313173]'>
                            Contáctanos
                        </button>
                    </NavLink>

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
            </nav>
            <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu" />
        </>

    )
}
