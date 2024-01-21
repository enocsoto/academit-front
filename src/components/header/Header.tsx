import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/academit-logo.svg'
import { NavBar } from './NavBar'
export const Header = () => {
  return (
    <header className="flex place-content-between items-center p-4">
      <NavLink to='/' className=''>
        <img src={logo} alt="logo"  className='cursor-pointer'/>
      </NavLink>
      <NavBar />
    </header>
  )
}
