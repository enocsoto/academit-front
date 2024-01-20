import logo from '../../assets/images/academit-logo.svg'
import { NavBar } from './NavBar'
export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <NavBar/>
    </header>
  )
}
