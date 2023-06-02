import { NavLink, Link } from "react-router-dom";
import { FaRegNewspaper, FaSearch, FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";


function NavComponent() {
  const activeStyles = {
    fontWeight: "bold",
    color: "orangered",
    textDecoration: "underline",
  };
  const source = useSelector((state) => state.user);
  return (
    <>
      <header>
        <nav className='d-flex flex-wrap justify-content-between align-items-center'>
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
              Welcome {source.email}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
           
            <Link to='/' className="text-dark fw-bold"><p>Home</p></Link>
            <Link to='features' className="text-dark fw-bold"><p>Features</p></Link>
            <Link to='shop' className="text-dark fw-bold"><p>Shop</p></Link>
            <Link to='gallery' className="text-dark fw-bold"><p>Gallery</p></Link>
            <Link to='blog' className="text-dark fw-bold"><p>Blog</p></Link>
            <Link to='about' className="text-dark fw-bold"><p>About</p></Link>
            <Link to='contact' className="text-dark fw-bold"><p>Contact</p></Link>
            <Link to='login' className="text-dark fw-bold"><p>Log In</p></Link>
          </div>
        </div>
          <Link className='logo theHeader ' to='/'>
            NewsLand<FaRegNewspaper />
          </Link>
          <NavLink
            to='/'
            className='ms-5 theHeader'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
          <NavLink  className='theHeader'
            to='features'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Features
          </NavLink>
          <NavLink className='theHeader'
            to='shop'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Shop
          </NavLink>
          <NavLink className='theHeader'
            to='gallery'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Gallery
          </NavLink>
          <NavLink className='theHeader'
            to='blog'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Blog
          </NavLink>
          <NavLink className='theHeader'
            to='about'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          <NavLink className='theHeader'
            to='contact'
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Contact
          </NavLink>
          <FaSearch className='header-search ms-5 theHeader' />
          <button className='btn text-light btn-small header-btn theHeader'>Subscribe</button>
        </nav>
      </header>
    </>
  );
}

export default NavComponent;
