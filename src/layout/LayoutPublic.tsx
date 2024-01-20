import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import { Footer } from "../components/footer/Footer"

export const LayoutPublic = () => {
    return (
        <div className="">
            <Header/>
            <main className="">
                <Outlet />
            </main>
            <footer>{<Footer/>}</footer>
        </div>
    )
}
