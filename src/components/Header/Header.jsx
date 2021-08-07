import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Header.css";

export default function Header() {
  const history = useHistory();
  const { isAuth, setIsAuth } = useContext(UserContext);
  return (
    <div className="header_container">
      <header className="header">
        <div>
          <span className="header__logo">Simplilearn</span>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/">
              Courses
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav__item">
            {isAuth ? (
              <button
                onClick={() => {
                  localStorage.clear();
                  setIsAuth(false);
                  history.push("/login");
                }}
                className="nav__button"
              >
                Logout
              </button>
            ) : (
              <NavLink className="nav__button" to="/login">
                Signin
              </NavLink>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
}
