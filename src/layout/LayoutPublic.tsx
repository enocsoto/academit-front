import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { NavBar } from "../components/header/NavBar"

export const LayoutPublic = () => {
    return (
        <div className="">
            <main className="dark:bg-gray-950 bg-white">
                <NavBar/>
                <Outlet />
            </main>
            <footer>{<Footer/>}</footer>
        </div>
    )
}
