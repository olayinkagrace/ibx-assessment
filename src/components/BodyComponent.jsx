import React from 'react'

function BodyComponent() {
  return (
    <section className='footer container'>
          <div className='row py-5'>
            <div className='col mb-3'>
              <h1>Sign Up for Our Newsletters</h1>
            </div>
            <div className='col pt-2 mb-3'>
              {" "}
              <p className='text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a
                inventore dolorum modi assumenda, quam veniam non ab et!
                Corrupti iusto eum explicabo? Suscipit, reprehenderit.
              </p>
            </div>
            <div>
              <input
                className='footer-input mb-2 py-2'
                type='email'
                placeholder='Input your email address here'
              />
              <button className='btn header-btn text-light ms-2 py-2'>
                Subscribe Now
              </button>
            </div>
          </div>
      </section>
  )
}

export default BodyComponent
