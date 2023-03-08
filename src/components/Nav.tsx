import { NavLink } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import "@styles/Nav.scss";

export const Nav = () => {
  return (
    <nav className="nav__container">
      <NavLink className="nav__logo" to="/">
        <BiMoviePlay />
      </NavLink>
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
