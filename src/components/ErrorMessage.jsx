import { useRouteError } from 'react-router-dom'


function ErrorMessage() {
    const error = useRouteError()
    console.log(error);
    return (
      <div className='text-center container my-5 justify-content-center align-items-center'>
        <h3>Error: {error.message}</h3>
        <pre>{error.status} - {error.statusText}</pre>
      </div>
    )
}

export default ErrorMessage
