import { NavLink, Link } from "react-router-dom";
import { FaRegNewspaper, FaSearch } from "react-icons/fa";

function NavComponent() {
  const activeStyles = {
    fontWeight: "bold",
    color: "orangered",
    textDecoration: "underline",
  };
  return (
    <header className='d-flex flex-wrap justify-content-between bg-primary align-items-center'>
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
      <FaSearch className="header-search ms-5" />
      <button className="btn text-light header-btn">Subscribe</button>
    </header>
  );
}

export default NavComponent;
