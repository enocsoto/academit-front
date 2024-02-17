import { useState } from "react";
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export const Login = () => {

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
    <div className="bg-white p-8 rounded-lg md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold font-lexend
            text-center text-black">
          Iniciar Sesion
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-lexend" >
        <div className="relative">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />

          <input type="email"
            className="w-full border-2 border-gray-200 outline-none py-2
            px-8 rounded-lg text-gray-900"
            placeholder="Correo electronico" />

        </div>
        <div className="relative">
          <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500" />
          <input type={showPassword ? "text" : "password"}
            className="w-full border-2 border-gray-200 outline-none py-2
            px-8 rounded-lg text-gray-900"
            placeholder="Contraseña"
          />
          {showPassword
            ? (<RiEyeOffLine onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 hover:cursor-pointer" />
            ) : (
              <RiEyeLine onClick={handleShowPassword} className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 hover:cursor-pointer" />
            )}
        </div>
        <div>
          <button className="w-full bg-sky-600 text-white py-2 px-6 rounded-lg mt-6 hover:bg-sky-800 hover:scale-105 transition-all"
            type="submit">Ingresar</button>

        </div>
      </form>
    </div>
  )
}
