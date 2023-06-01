import { NavLink, Link } from "react-router-dom";
import { FaRegNewspaper, FaSearch, FaAlignJustify } from "react-icons/fa";


function NavComponent() {
  const activeStyles = {
    fontWeight: "bold",
    color: "orangered",
    textDecoration: "underline",
  };

  return (
    <>
      <header>
        <button
          className='btn btn-secondary menuIcon'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasScrolling'
          aria-controls='offcanvasScrolling'
        >
          <FaAlignJustify />
        </button>

        <div
          className='offcanvas offcanvas-start'
          data-bs-scroll='true'
          data-bs-backdrop='false'
          tabIndex='-1'
          id='offcanvasScrolling'
          aria-labelledby='offcanvasScrollingLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title fw-bolder ' id='offcanvasScrollingLabel'>
              Welcome
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
           
            <Link className="text-dark fw-bold"><p>Features</p></Link>
            <Link className="text-dark fw-bold"><p>Shop</p></Link>
            <Link className="text-dark fw-bold"><p>Gallery</p></Link>
            <Link className="text-dark fw-bold"><p>Blog</p></Link>
            <Link className="text-dark fw-bold"><p>About</p></Link>
            <Link className="text-dark fw-bold"><p>Contact</p></Link>
          </div>
        </div>
        <nav className='d-flex flex-wrap justify-content-between theHeader align-items-center'>
          <Link className='logo' to='/'>
            <FaRegNewspaper />
          </Link>
          <NavLink
            to='/'
            className='ms-5'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
          <NavLink
            to='features'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Features
          </NavLink>
          <NavLink
            to='shop'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Shop
          </NavLink>
          <NavLink
            to='gallery'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Gallery
          </NavLink>
          <NavLink
            to='blog'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Blog
          </NavLink>
          <NavLink
            to='about'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          <NavLink
            to='contact'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Contact
          </NavLink>
          <FaSearch className='header-search ms-5' />
          <button className='btn text-light header-btn'>Subscribe</button>
        </nav>
      </header>
    </>
  );
}

export default NavComponent;
