import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";  


export const Button = () => {
    return (
        <div className="md:flex items-center gap-4">
            <NavLink to='/search'>
                <div className="cursor-pointer">
                <BiSearchAlt className='w-10 h-10'/>
                </div>
            </NavLink>
            <NavLink to='/car'>
                <div className=" cursor-pointer">
                    <GiShoppingCart className='w-10 h-10'/>
                </div>
            </NavLink>
            <NavLink to='/login'>
            <button className="block mb-2
            border-2 border-[#313173] 
            rounded-md p-2 
            font-semibold font-lexend 
            text-[#313173] lg:text-[20px]
            hover:text-white hover:bg-[#313173]
            ">Iniciar sesión</button>
            </NavLink>

            <NavLink to='/register'>
            <button className="block mb-2
            border-2 border-[#313173] 
            bg-[#313173] rounded-md
            p-3 font-semibold 
            font-lexend text-white
            hover:text-[#313173] hover:bg-white
            ">Regístrate</button>
            </NavLink>
        </div>
    )
}

