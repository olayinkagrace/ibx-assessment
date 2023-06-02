import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault()
    navigate("/");
  }
  return (
    <main className='text-light login'>
      <section className='container d-flex flex-column justify-content-center'>
        <div className='bottom pt-5 mt-5'>
          <form className='margin-auto mt-5 pt-5'>
            <div className=' bg-dark w-100 mb-2'>
              <input
                type='text'
                placeholder='Name'
                className='bg-dark input-email text-light'
              />
            </div>
            <div className=' bg-dark w-100 mb-2'>
              <FaUser className='m-2' />
              <input
                type='email'
                placeholder='Email'
                className='bg-dark input-email text-light'
              />
            </div>
            <div className='bg-dark w-100 div_password mb-3'>
              <FaLock className='m-2' />
              <input
                type='password'
                placeholder='Password'
                className='input-email bg-dark input-email text-light'
              />
            </div>
            <button className='buton w-100 p-2' onClick={handleClick}>
              Sign Up
            </button>
          </form>
          <div className='d-flex flex-wrap justify-content-between my-4'>
            <Link to='/login' className='text-light'>
              <p className='par'>Log in</p>
            </Link>
            <Link to='forgetpassword' className='text-light'>
              <p className='par'>Forget User ID/ Password</p>
            </Link>
            <Link to='help' className='text-light'>
              <p className='par'>Get Help</p>
            </Link>
          </div>
          <div className='d-flex justify-content-between align-items-center'></div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
