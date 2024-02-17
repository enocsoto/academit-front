import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <>
      <div className="bg-gray-100
     h-screen flex items-center 
     justify-center p-6">
        <Outlet />
        
      </div>
    </>
  )
}
