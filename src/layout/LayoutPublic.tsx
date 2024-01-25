import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Sections } from "../components/sections/Sections"
import { NavBar } from "../components/header/NavBar"

export const LayoutPublic = () => {
    return (
        <div className="">
            <main className="dark:bg-gray-950 bg-white">
                <NavBar/>
                <Outlet />
                <Sections/>
            </main>
            <footer>{<Footer/>}</footer>
        </div>
    )
}
