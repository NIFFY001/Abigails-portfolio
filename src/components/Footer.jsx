import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <>
      <div className="bg-[#161513] md:px-20 flex  flex-col md:flex-row justify-between items-center text-white md:p-10 p-4 gap-5 border-t-2 border-t-bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] bg-clip-border ">
        <div className="">
          <img src={logo} className="mb-5 h-[40px] md:h-[50px]" alt="logo" />
          <p className="">
            I design the designerable, I have design skills and <br />
            prototyping skills, looking for that pretty <br /> designer she is
            right here.
          </p>
        </div>

        <div className="">
          <ul className="flex md:flex-row gap-5 md:text-xl mb-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>

          <div className="flex md:flex-row justify-end gap-3">
            <a href="https://www.linkedin.com/in/alabi-abigail-18495423a/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.tiktok.com/@abigail_tastes">
              <img src={tiktok} alt="tiktok" />
            </a>
            <a href="https://www.instagram.com/abigailalabi0/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
