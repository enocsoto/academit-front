import { useRouteError, Link } from "react-router-dom"

interface CustomError {
  statusText?: string;
  message?: string;
}
export const NotFound = () => {

  let error = useRouteError() as CustomError;
  return (
    <div> 404
      <p>
        Page Not Found
      </p>
      <p>{error.statusText || error.message}</p>
      <Link to='/'> Volver a Home</Link>
    </div>
  )
}
