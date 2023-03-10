import { NavLink } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import "@styles/Nav.scss";

export const Nav = () => {
  return (
    <nav className="nav__container">
      <div className="nav__div">
        <NavLink className="nav__logo" to="/">
          <BiMoviePlay />
        </NavLink>
        <NavLink className="nav__search" to="/search">
          <IoMdSearch />
        </NavLink>
      </div>
      <ul className="nav__ul">
        <NavLink className="nav__navLink" to="/">
          {({ isActive }) => (
            <span
              className={`nav__span ${
                isActive ? "nav__span--active" : "nav__span--noActive"
              }`}
            >
              Home
            </span>
          )}
        </NavLink>
        <NavLink className="nav__navLink" to="/movies">
          {({ isActive }) => (
            <span
              className={`nav__span ${
                isActive ? "nav__span--active" : "nav__span--noActive"
              }`}
            >
              Movie
            </span>
          )}
        </NavLink>
        <NavLink className="nav__navLink" to="/tv">
          {({ isActive }) => (
            <span
              className={`nav__span ${
                isActive ? "nav__span--active" : "nav__span--noActive"
              }`}
            >
              TV
            </span>
          )}
        </NavLink>
      </ul>
    </nav>
  );
};
