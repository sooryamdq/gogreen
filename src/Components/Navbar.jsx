import { useState } from "react";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import About from "../Pages/About";
import bgimg from "../assets/shade.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative montserrat-subrayada-bold">
      <div className="flex  justify-between items-center px-4 py-1 nav ">
        <div>
          <img src={logo} alt="GoGreeenverz" />
        </div>
        <div className="lg:block hidden">
          <ul className="flex gap-10  cursor-pointer">
            <li class="relative font-Montserrat Bold transition duration-300 ease-in-out hover:before:bg-white hover:before:w-1/2 hover:before:h-0.5 hover:before:absolute hover:before:bottom-0 hover:text-secondary">
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li class="relative font-Montserrat Bold transition duration-300 ease-in-out hover:before:bg-white hover:before:w-1/2 hover:before:h-0.5 hover:before:absolute hover:before:bottom-0 hover:text-secondary">
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li class="relative font-Montserrat Bold transition duration-300 ease-in-out hover:before:bg-white hover:before:w-1/2 hover:before:h-0.5 hover:before:absolute hover:before:bottom-0 hover:text-secondary">
              <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
                Portfolio
              </a>
            </li>
            <li class="relative font-Montserrat Bold transition duration-300 ease-in-out hover:before:bg-white hover:before:w-1/2 hover:before:h-0.5 hover:before:absolute hover:before:bottom-0 hover:text-secondary">
              <a href="#services" onClick={() => scrollToSection("services")}>
                Services
              </a>
            </li>
            <li class="relative font-Montserrat Bold transition duration-300 ease-in-out hover:before:bg-white hover:before:w-1/2 hover:before:h-0.5 hover:before:absolute hover:before:bottom-0 hover:text-secondary">
              <a href="#blog" onClick={() => scrollToSection("blog")}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="pr-20 lg:block hidden cursor-pointer z-50">
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            <button className="bg-primary font-Montserrat Bold text-white px-2 py-1 cursor-pointer rounded-md">
              Contact
            </button>
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="#006400"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-primary z-50 cursor-pointer ">
          <ul className="flex font-Montserrat Bold flex-col gap-4 text-white px-4 py-2">
            <a href="#home" onClick={() => scrollToSection("home")}>
              <li>Home</li>
            </a>
            <a href="#about" onClick={() => scrollToSection("about")}>
              <li>About</li>
            </a>
            <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
              <li>Portfolio</li>
            </a>
            <a href="#services" onClick={() => scrollToSection("services")}>
              <li>Services</li>
            </a>
            <a href="#blog" onClick={() => scrollToSection("blog")}>
              <li>Blog</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
