import React, { useState } from "react";
import Menu from "../../../assets/Images/Menu.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Header = () => {
  const [navlist] = useState([
    { id: 1, name: "About", link: "about" },
    { id: 2, name: "Work", link: "work" },
    { id: 3, name: "Contact", link: "contact" },
  ]);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showToggler = () => {
    setShow(!show);
  };

  const navlistClassName = show
    ? `!flex flex-col justify-center items-center text-xl bg-amber-50 fixed left-0 top-0 w-full h-full
        md:flex-row md:relative md:bg-transparent`
    : "hidden";

  const NavItem = ({ name, link }) => {
    const handleClick = () => {
      if (name === "About") {
        navigate("/about");
      } else {
        if (location.pathname !== "/") {
          navigate("/", { state: { scrollTo: link } });
        }
      }
    };

    return (
      <li className="cursor-pointer hover:underline">
        {name === "About" ? (
          <span onClick={handleClick}>{name}</span>
        ) : location.pathname === "/" ? (
          <ScrollLink
            to={link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
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
    <div className="overflow-x-hidden">
    <header className="flex justify-between px-12 py-6 sticky top-0 bg-white">
      <ScrollToTop />
      <div className="brand font-semibold text-xl">Logo</div>
      <nav>
        <ul className={`${navlistClassName} hidden md:flex gap-12`}>
          {navlist.map(({ id, name, link }) => (
            <NavItem key={id} name={name} link={link} />
          ))}
          <p
            onClick={showToggler}
            className="md:hidden cursor-pointer hover:underline font-medium bg-slate-900 py-2 px-3 text-white"
          >
            Go Back
          </p>
        </ul>
      </nav>
      <img
        onClick={showToggler}
        src={Menu}
        className="h-6 w-6 md:hidden"
        alt="Menu"
      />
    </header>
    </div>
    </>
  );
};

export default Header;



