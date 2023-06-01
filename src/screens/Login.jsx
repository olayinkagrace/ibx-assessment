import {
  FaUser,
  FaLock,
} from "react-icons/fa";
import { Link, redirect, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    
    function handleClick() {
        navigate('/')
    
    }
  return (
    <main className='text-light login'>
      <section className='container d-flex flex-column justify-content-center'>
        <div className='bottom pt-5 mt-5'>
          <form className="margin-auto mt-5 pt-5">
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
              Login
            </button>
          </form>
          <div className='d-flex flex-wrap justify-content-center my-4'>
            <Link className="text-light" to='/signup'><p className='m-3'>Sign Up</p></Link>
            <Link className="text-light" to='forgetpassword'><p className='m-3'>Forget User ID/ Password</p></Link>
            <Link className="text-light" to='help'><p className='m-3'>Get Help</p></Link>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
           
           
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
