import React from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <>
      <div className="bg-[#161513] md:px-20 flex  flex-col md:flex-row justify-between items-center text-white md:p-10 p-4 gap-5 border-t-2 border-t-bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] bg-clip-border">
        <div className="">
          <img src={logo} className="mb-5 h-[40px] md:h-[50px]"></img>
          <p className="">
            I design the designerable, i have design skills and <br />
            prototyping skills, looking for that pretty <br /> designer she is
            right here.
          </p>
        </div>

        <div className="">
          <div className="mb-4">
            <li className="flex  md:flex-row gap-5 md:text-xl">
              <a href="/">
                <ul>Home</ul>
              </a>
              <a a href="/about">
                <ul>About</ul>
              </a>

              <ul>Services</ul>
              <ul>Projects</ul>
              <ul>Blog</ul>
            </li>
          </div>

          <div className="flex   md:flex-row justify-end gap-3">
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
