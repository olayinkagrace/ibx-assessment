import emoji from '../assets/error.png'

function NotFound() {
  return (
    <div className='text-center container my-5 justify-content-center align-items-center'>
      <div className='my-5 not-found'>
        <img src={emoji} alt='error-img' width="70%" />
        <h1 className="not-found-header">404</h1>
        <p>Page not found</p>
        <small className="w-5 text-secondary">
          The page you are looking for does not exist or an other action occured.
          Go back or head over to our main page{" "}to choose anew direction
        </small>
      </div>
    </div>
  );
}

export default NotFound;
