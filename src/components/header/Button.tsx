import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";


export const Button = () => {
  return (
    <div className="flex items-center gap-2 ">
      <NavLink to='/search' className="hidden lg:flex">
        <div className="cursor-pointer">
          <BiSearchAlt className='w-10 h-10 dark:text-white' />
        </div>
      </NavLink>
      <NavLink to='/car' className="hidden lg:flex">
        <div className=" cursor-pointer">
          <GiShoppingCart className='w-10 h-10 dark:text-white text-[#313173]' />
        </div>
      </NavLink>
        <NavLink to='/login' className={"hidden sm:flex items-center"}>
          <button className="block
            border-2 border-[#313173] 
            rounded-md p-2 
            font-semibold font-lexend 
            text-[#313173] md:text-sm 
            hover:text-white hover:bg-[#313173]
            ">Iniciar sesión</button>
        </NavLink>

        <NavLink to='/register' className={"hidden sm:flex items-center"}>
          <button className="block
            border-2 border-[#313173] 
            bg-[#313173] rounded-md
            p-2 font-semibold 
            font-lexend text-white
            md:text-sm
            hover:text-[#313173] hover:bg-white
            ">Regístrate</button>
        </NavLink>
    </div>
  )
}

