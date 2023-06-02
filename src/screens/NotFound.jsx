import emoji from '../assets/error.png'

function NotFound() {
  return (
    <div className='text-center container my-5 justify-content-center align-items-center'>
      <div className='not-found'>
        <img className='err-img' src={emoji} alt='error-img' width="50%" />
        <h1 className="not-found-header">404</h1>
        <p className='fs-5'>Page not found</p>
        <small className="w-5 text-secondary fw-semibold">
          The page you are looking for does not exist or an other action occured.
          Go back or head over to our main page{" "}to choose anew direction
        </small>
      </div>
    </div>
  );
}

export default NotFound;
