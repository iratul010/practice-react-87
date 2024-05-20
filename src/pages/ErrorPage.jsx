import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
  const {error,status} = useRouteError();
  return (
    <div className="container flex flex-col">
      <h2> Error: {status || '404'}</h2>
      <p>{error?.message}</p>
      <button className="btn w-[200px] text-black bg-white ">
        <Link to='/'>Back To  HomePage</Link>
      </button>
    </div>
  )
}

export default ErrorPage
