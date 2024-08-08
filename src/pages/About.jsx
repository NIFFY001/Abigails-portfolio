import React from "react";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import meimg from "../assets/meimg.png";
import abi3 from "../assets/abi3.png";
import star from "../assets/star.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import dp from "../assets/dp.png";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";

export default function About() {
  const { ref: dpRef, inView: dpInView } = useInView({
    triggerOnce: false, // Set to false for continuous triggering
  });
  const { ref: Ref2, inView: Ref2InView } = useInView({
    triggerOnce: false, // Set to false for continuous triggering
  });

  return (
    <>
      <NavBar />
      <div className="bg-[#000000] min-h-screen text-white md:leading-[60px] leading-[30px]">
        <div className="flex justify-end px-20 md:mb-[-100px] pt-7 ">
          <img src={star} alt="star" className=" animate-bounce" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:w-[100%] md:px-20 px-5">
          <div className="md:w-[50%] zoom-in">
            <img src={meimg} alt="me" />
            <h1>
              I am a UI/UX designer, front-end dev, and AI Engr from Lagos,
              Nigeria
            </h1>
            <h2>
              I'm a passionate and versatile professional specializing in UI/UX
              design, front-end development, and artificial intelligence
              engineering, based in the vibrant city of Lagos, Nigeria.
            </h2>
            <div className="flex gap-5 items-center">
              <p className="text-xl">Follow Me</p>
              <div className="flex gap-3">
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

          <div className="md:w-[50%] animate-pulse">
            <img src={abi3} className="w-full object-cover" alt="abi" />
          </div>
        </div>
        <div className="mb-[25px]">
          <ImageSlider />
        </div>
        <div className="flex justify-center mb-10">
          <img
            ref={dpRef}
            src={dp}
            alt="dp"
            className={`md:w-[1000px] w-[350px] object-cover transition-transform duration-1000 ${
              dpInView ? "scale-110" : "scale-100"
            }`}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
