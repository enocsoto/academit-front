import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/academit-logo.svg'
import { NavLinks } from './NavLinks';
import { Button } from './Button';
import { useState } from 'react';


export const NavBar = () => {
const [open, setOpen] = useState(false)
    return (
        <nav className='dark:bg-white items-center gap-4 p-3 '>
            <div className='flex items-center font-medium justify-around'>
                    <div className='z-50 p-3 md:w-auto w-full flex justify-between'>
                        <NavLink to='/'>
                            <img src={logo} alt="logo" className='md:cursor-pointer' />
                        </NavLink>
                        <div className='text-3xl md:hidden' onClick={()=> setOpen(!open)}>
                        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                    </div>
                <div className='flex gap-4'>
                    <ul className='md:flex hidden 
                    items-center gap-4 
                    font-lexend text-LoginText 
                    hover:text-[#313173] lg:text-[20px] 
                    md:text-[16px] p-2
                    '>
                        <NavLinks/>
                    </ul>
                    <div className='md:block hidden'>
                    <Button/>
                    </div>
                </div>

                    {/* mible nav */}
                    <ul className={`
                    md:hidden bg-white
                    absolute w-full
                    h-full bottom-0
                    py-24 pl-4
                    duration-500 ${open ? "left-0": "left-[-100%]"}`}>
                        <NavLinks/>
                        <div className='py-5'>
                            <Button/>
                        </div>
                    </ul>
            </div>
        </nav >

    )
}
