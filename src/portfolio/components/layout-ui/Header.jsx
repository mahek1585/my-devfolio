


import React, { useState } from "react";
import MenuIcon from "../../../assets/Images/Menu.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../../../assets/Images/mahek_logo.jpg";

const Header = () => {
  const [navlist] = useState([
    { id: 1, name: "About", link: "about" },
    { id: 2, name: "Work", link: "work" },
    { id: 3, name: "Contact", link: "contact" },
  ]);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => setShow(!show);

  const NavItem = ({ name, link }) => {
    const handleClick = () => {
      if (name === "About") {
        navigate("/about");
      } else {
        if (location.pathname !== "/") {
          navigate("/", { state: { scrollTo: link } });
        }
      }
      setShow(false); // Close menu on click
    };


    return (
      <li className= "cursor-pointer hover:text-[#009379] transition-all duration-200 font-medium text-[1rem]">
        {name === "About" ? (
          <span onClick={handleClick}>{name}</span>
        ) : location.pathname === "/" ? (
          <ScrollLink
            to={link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShow(false)}
          >
            {name}
          </ScrollLink>
        ) : (
          <span onClick={handleClick}>{name}</span>
        )}
      </li>
    );
  };

  return (
    <>
      <ScrollToTop />
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 font-medium text-gray-700">
            {navlist.map(({ id, name, link }) => (
              <NavItem key={id} name={name} link={link} />
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={handleToggle}
          >
            <img src={MenuIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Overlay Nav */}
        {show && (
          <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl font-semibold text-gray-800 transition-all duration-300 ease-in-out">
            {navlist.map(({ id, name, link }) => (
              <NavItem key={id} name={name} link={link} />
            ))}
            <button
              onClick={handleToggle}
              className="mt-4 px-4 py-2 bg-black text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
