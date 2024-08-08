import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa"; // You can use any menu icon you like
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="flex justify-between items-center px-5 md:px-10 md:py-2 py-6  text-[#D9D9D9] bg-[#161513] sticky top-0 z-30"
      style={{ borderBottom: "1px solid #FFFFFF" }}
    >
      <a href="/">
        <img src={logo} alt="Logo" className="h-[40px] md:h-[50px] " />
      </a>

      <div className="hidden md:flex items-center gap-4 md:gap-10">
        <a href="/">
          <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
            Home
          </button>
        </a>
        <a href="/about">
          <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
            About
          </button>
        </a>
        <Link to="">
          <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
            Services
          </button>
        </Link>
        <Link to="">
          <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
            Projects
          </button>
        </Link>
        <Link to="">
          <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
            Blog
          </button>
        </Link>
      </div>
      <Link to="" target="blank" className="hidden md:block">
        <button className=" font-semibold py-2 px-2 md:px-5 hover:border hover:border-white rounded-2xl text-xs md:text-sm bg-[#FFFFFF] text-[#161513]">
          Lets Talk
        </button>
      </Link>
      <button className="md:hidden" onClick={toggleMobileMenu}>
        <FaBars size={25} color="#D9D9D9" />
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080808] text-[#D9D9D9] flex flex-col items-center gap-4 py-5">
          <Link to="">
            <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
              Home
            </button>
          </Link>
          <Link
            to=""
            className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm"
          >
            About
          </Link>
          <Link
            to=""
            className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm"
          >
            Services
          </Link>
          <Link
            to=""
            className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm"
          >
            Projects
          </Link>
          <Link to="">
            <button className="relative border-b-0 after:content-[''] after:block after:h-[2px] after:w-full after:absolute after:left-0 after:bottom-0 hover:after:bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] hover:pb-1 text-xs md:text-sm">
              Blog
            </button>
          </Link>
          <Link to="" target="blank">
            <button className="hover:bg-[#fff] text-[#161513] font-semibold py-2 px-5 hover:border hover:border-white rounded-2xl text-sm bg-[#FFFFFF]">
              Lets Talk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
