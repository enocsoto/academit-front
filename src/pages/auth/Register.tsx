import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Register = () => {

  const [showPassword, setShowPassword] = useState(false)
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("");
  //pendiente funcionalidad email and pass 
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div className="dark:bg-slate-950 bg-white p-8 rounded-lg">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-semibold font-lexend
            text-center dark:text-white text-[#313173]">
          Registrarse
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm 
              text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none 
              dark:text-white dark:border-gray-600 
              dark:focus:border-[#313173] focus:outline-none 
              focus:ring-0 focus:border-[#313173] peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 
              top-3 -z-10 origin-[0] peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-400 
              peer-focus:dark:text-gray-300
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
              peer-focus:-translate-y-6">
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm 
              text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none 
              dark:text-white dark:border-gray-600 
              dark:focus:border-[#313173] focus:outline-none 
              focus:ring-0 focus:border-[#313173] peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute 
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
              peer-focus:text-gray-400 peer-focus:dark:text-gray-300 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6">
              Apellidos
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="floating_phone"
              className="block py-2.5 px-0 w-full text-sm 
              text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none 
              dark:text-white dark:border-gray-600 
              dark:focus:border-[#313173] focus:outline-none 
              focus:ring-0 focus:border-[#313173] peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute 
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
              peer-focus:text-gray-400 peer-focus:dark:text-gray-300 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6">
              Teléfono
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="document_id"
              className="block py-2.5 px-0 w-full text-sm 
              text-gray-900 bg-transparent border-0 
              border-b-2 border-gray-300 appearance-none 
              dark:text-white dark:border-gray-600 
              dark:focus:border-[#313173] focus:outline-none 
              focus:ring-0 focus:border-[#313173] peer 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute 
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
              peer-focus:text-gray-400 peer-focus:dark:text-gray-300 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6">
              Documento de Identidad
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm 
            text-gray-900 bg-transparent border-0 
            border-b-2 border-gray-300 appearance-none 
            dark:text-white dark:border-gray-600 
            dark:focus:border-[#313173] focus:outline-none 
            focus:ring-0 focus:border-[#313173] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute 
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
              peer-focus:text-gray-400 peer-focus:dark:text-gray-300 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6">
            Correo
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={showPassword ? "text" : "password"}
            name="floating_password"
            className="block py-2.5 px-0 w-full text-sm 
            text-gray-900 bg-transparent border-0 
            border-b-2 border-gray-300 appearance-none 
            dark:text-white dark:border-gray-600 
            dark:focus:border-[#313173] focus:outline-none 
            focus:ring-0 focus:border-[#313173] peer"
            placeholder=" "
            required
          />
          {showPassword
            ? (<RiEyeOffLine onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 hover:cursor-pointer" />
            ) : (
              <RiEyeLine onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 hover:cursor-pointer" />
            )}
          <label className="peer-focus:font-medium absolute 
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
              peer-focus:text-gray-400 peer-focus:dark:text-gray-300 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6">
            Contraseña
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={showPassword ? "text" : "password"}
            name="repeat_password"
            className="block py-2.5 px-0 w-full text-sm 
            text-gray-900 bg-transparent border-0 
            border-b-2 border-gray-300 appearance-none 
            dark:text-white dark:border-gray-600 
            dark:focus:border-[#313173] focus:outline-none 
            focus:ring-0 focus:border-[#313173] peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute 
              text-sm text-gray-500 dark:text-gray-400 
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
              origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
              peer-focus:text-gray-400 peer-focus:dark:text-gray-300 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6">
            Confirmar Contraseña
          </label>
        </div>
        <div className="flex items-center gap-4 place-content-around">
          <button
            type="submit"
            className="text-[#313173]
            dark:text-white
            dark:hover:text-white
            hover:text-white
            hover:bg-[#313173]
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
            border-2
            font-lexend
            text-center dark:hover:bg-[#313173]
            dark:focus:ring-[#313173]">
            Registrarse
          </button>
          <Link to={'/'}>
            <button
              type="submit"
              className="text-[#313173]
              dark:text-white
              dark:hover:text-white
              hover:text-white
              hover:bg-[#313173]
              focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
              border-2
              font-lexend
              text-center dark:hover:bg-[#313173]
              dark:focus:ring-blue-800">
              Regresar
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
