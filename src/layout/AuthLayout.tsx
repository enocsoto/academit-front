import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <>
      <div className="text-3xl font-bold
     text-red-600 
     h-screen flex items-center 
     justify-center">
        AuthLayout
        <Outlet />
        
      </div>
    </>
  )
}
