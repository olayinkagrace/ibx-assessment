import {
  FaUser,
  FaLock,
  FaFingerprint,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
              <FaFingerprint className='m-2 float-end' />
            </div>
            <button className='buton w-100 p-2' onClick={handleClick}>
              Login
            </button>
          </form>
          <div className='d-flex justify-content-between my-4'>
            <p className='par'>Sign Up</p>
            <p className='par'>Forget User ID/ Password</p>
            <p className='par'>Get Help</p>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
           
           
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
