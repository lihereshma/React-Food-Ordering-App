import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-semibold">{ err.status } { err.statusText }</h1>
    </div>
  )
}

export default Error;