import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer/Footer"
import { Sections } from "../components/sections/Sections"

export const LayoutPublic = () => {
    return (
        <div className="">
            <Header/>
            <main className="dark:bg-gray-950">
                <Outlet />
                <Sections/>
            </main>
            <footer>{<Footer/>}</footer>
        </div>
    )
}
