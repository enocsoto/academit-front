import burgerMenu from '../../assets/images/icon-menu.svg'
import iconCar from '../../assets/images/Shopping.svg'
import search from '../../assets/images/search-icon.svg'

export const NavBar = () => {
    return (
        <>
            <ul>
                <li></li>
                <li>
                    <img className="w-15 h-9 cursor-pointer" src={search} alt="Car" />
                </li>
                <li>
                    <img className="w-15 h-9 cursor-pointer" src={iconCar} alt="Car" />
                </li>
                <li>
                    <button className="border-2 p-2 rounded-md text-LoginText font-bold border-blue-800">
                        Iniciar sesión
                    </button>
                </li>
                <li>
                    <button className="border-2 p-2 rounded-md text-gray-800 font-lexend font-bold border-blue-800 bg-BGLoginText">
                        Regístrate
                    </button>
                </li>
            </ul>
            <img className="w-10 h-4 cursor-pointer sm:hidden" src={burgerMenu} alt="Menu" />
        </>
    )
}
