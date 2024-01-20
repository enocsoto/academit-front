import { Outlet } from "react-router-dom"
import { Header } from "../components/header"

export const LayoutPublic = () => {
    return (
        <div className="p-6">
            <Header/>
            <main className="">
                <Outlet />
            </main>
            <footer className="flex">Footer</footer>
        </div>
    )
}
