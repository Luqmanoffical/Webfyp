import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import styles from "../Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("Email");
    if (data) {
      setLogin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Email");
    setLogin(false);
  };

  useEffect(() => {
    const handlePathChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener("popstate", handlePathChange);

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handlePathChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handlePathChange();
    };

    handlePathChange();

    return () => {
      window.removeEventListener("popstate", handlePathChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <nav
      className={`${styles.xPaddings} p-3 bg-n-8 w-[100vw] fixed top-0 left-0 z-50`}
    >
      <div className="w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
      >
        <NavLink to="/">
          <h1 className="text-white font-bold text-lg">FYP</h1>
        </NavLink>

        <button onClick={toggleMenu} className="block md:hidden text-white">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`flex-col md:hidden ${
            isOpen
              ? "flex absolute left-0 top-[64px] bg-n-8 w-full z-50"
              : "hidden"
          }`}
        >
          <div className="flex flex-col w-full">
            <NavLink
              to="/"
              exact
              onClick={() => setActiveLink("/")}
              className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${
                activeLink === "/"
                  ? "text-purple-400 border-b border-purple-700"
                  : ""
              }`}
            >
              Home
            </NavLink>
            {login ? (
              <div className="flex flex-col gap-6 w-full">
                <div>
                  <NavLink
                    to="/history"
                    onClick={() => setActiveLink("/signup")}
                    className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${
                      activeLink === "/history"
                        ? "text-purple-400 border-b border-purple-700"
                        : ""
                    }`}
                  >
                    History
                  </NavLink>
                </div>
                <div>
                  <h1
                    onClick={handleLogout}
                    className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${
                      activeLink === "/signup"
                        ? "text-purple-400 border-b border-purple-700"
                        : ""
                    }`}
                  >
                    Logout
                  </h1>
                </div>
              </div>
            ) : (
              <div>
                <NavLink
                  to="/signup"
                  onClick={() => setActiveLink("/signup")}
                  className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${
                    activeLink === "/signup"
                      ? "text-purple-400 border-b border-purple-700"
                      : ""
                  }`}
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={() => setActiveLink("/login")}
                  className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${
                    activeLink === "/login"
                      ? "text-purple-400 border-b border-purple-700"
                      : ""
                  }`}
                >
                  Sign In
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center">
          <NavLink
            to="/"
            exact
            onClick={() => setActiveLink("/")}
            className={` mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${
              activeLink === "/"
                ? "text-purple-400 border-b border-purple-700"
                : ""
            }`}
          >
            Home
          </NavLink>

          {login ? (
            <div className="flex gap-2">
              <div>
                <NavLink
                  to="/history"
                  onClick={() => setActiveLink("/signup")}
                  className={`my-2 mx-4 hover:text-purple-400 font-code text-lg border-b border-transparent hover:border-purple-900 ${
                    activeLink === "/history"
                      ? "text-purple-400 border-b border-purple-700"
                      : ""
                  }`}
                >
                  History
                </NavLink>
              </div>

              <h1
                onClick={handleLogout}
                className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${
                  activeLink === "/signup"
                    ? "text-purple-400 border-b border-purple-700"
                    : ""
                }`}
              >
                Logout
              </h1>
            </div>
          ) : (
            <div>
              <NavLink
                to="/signup"
                onClick={() => setActiveLink("/signup")}
                className={`mx-2 lg:mx-4 hover:text-purple-400 font-code text-base lg:text-lg border-b border-transparent hover:border-purple-900 ${
                  activeLink === "/signup"
                    ? "text-purple-400 border-b border-purple-700"
                    : ""
                }`}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setActiveLink("/login")}
                className={`relative inline-block font-code text-sm lg:text-lg border-b-4 border-transparent px-3 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 ${
                  activeLink === "/login"
                    ? "text-purple-400 border-b border-purple-700"
                    : ""
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded"></span>
                <span className="relative z-10 text-white">Sign In</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
