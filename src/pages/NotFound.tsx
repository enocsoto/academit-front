import { useRouteError, Link } from "react-router-dom"

interface CustomError {
  statusText?: string;
  message?: string;
}
export const NotFound = () => {

  let error = useRouteError() as CustomError;
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold font-lexend">404</h1>
        <h2 className="text-gray-600 font-lexend">Oops! Esta pagina esta en construccion.</h2>
        <p>{error.statusText || error.message}</p>
        <Link to='/'
          className="mt-4 inline-block rounded
                 bg-sky-900 px-4 py-2 font-semibold
                text-white hover:bg-sky-700 
                font-lexend">
          Volver a Home
        </Link>
      </div>
    </div>
  )
}
