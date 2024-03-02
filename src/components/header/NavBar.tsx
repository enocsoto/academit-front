import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/academit-logo.svg';
import logoWhite from '../../assets/images/academit-logo-white.svg';
import { NavLinks } from './NavLinks';
import { Button } from './Button';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkTheme(darkThemeQuery.matches);
    
    const darkThemeChangeHandler = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    darkThemeQuery.addEventListener('change', darkThemeChangeHandler);

    return () => {
      darkThemeQuery.removeEventListener('change', darkThemeChangeHandler);
    };
  }, []);

  return (
    <nav className={`items-center gap-4 pb-3 ${isDarkTheme ? 'dark' : ''}`}>
      <div className='flex flex-auto items-center  md:justify-between'>
        <div className='lg:basis-1/6 z-50 p-3 md:w-auto w-full flex justify-between'>
          <NavLink to='/'>
            <img src={isDarkTheme ? logoWhite : logo} className='md:cursor-pointer h-full' />
          </NavLink>
          <div className='text-3xl md:hidden ' onClick={() => setOpen(!open)}>
            <div className={`icon-container ${open ? 'open' : 'closed'}`}>
              {open ? <IoMdClose /> : <RxHamburgerMenu className='dark:text-white' />}
            </div>
          </div>
        </div>
        <ul className='md:flex hidden 
                    items-center gap-4 
                    font-lexend text-LoginText 
                    lg:text-base
                    md:text-base p-2
                    dark:text-white'>
          <NavLinks />
          <NavLink to='/contact'>
            <li className='text-LoginText 
                    hover:text-[#313173] lg:text-base 
                    md:text-base p-2'>Contáctanos</li>
          </NavLink>

        </ul>
        <div className='hidden md:flex items-center'>
          <Button />
        </div>
      </div>

      {/* mobile nav */}
      <ul className={`
                    md:hidden bg-white
                    absolute w-full
                    h-full bottom-0
                    py-24 pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
        <NavLinks />
        <Button />
      </ul>
    </nav>

  )
}
