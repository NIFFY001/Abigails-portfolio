import React from "react";
import NavBar from "../components/NavBar";
import servicehero from "../assets/servicehero.png";
import ui from "../assets/ui.png";
import servicebg from "../assets/servicebg.png";
import frontend from "../assets/frontend.png";
import ai from "../assets/ai.png";
import D from "../assets/D.png";
import ServiceScroller from "../components/ServiceScroller";
import ContactForm from "../components/ContactForm";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <NavBar />
      <div className="relative md:leading-[50px] leading-[30px]">
        <img
          src={servicebg}
          className="h-[2450px]   md:h-[3000px] w-full object-cover"
        ></img>

        <div className="absolute inset-0">
          <div className="pt-10">
            <img src={servicehero} className="md:h-[700px] md:w-full"></img>
            <div className="md:mt-[-50px] mt-[-10px]">
              <ServiceScroller image={D} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row text-white items-center md:px-20 px-5">
            <div className="md:w-[50%]">
              <h1 className=" font-jakarta font-bold text-[20px]  mb-3">
                UI/UX DESIGN
              </h1>
              <p>
                it focuses on the look and layout of a product, ensuring it is
                visually appealing and intuitive for users. and also emphasizes
                the overall feel of the interaction, aiming to make the user
                journey smooth, efficient, and enjoyable. UI and UX Design work
                hand-in-hand to create products that are not only functional but
                also delightful to use, enhancing user satisfaction and
                engagement.
              </p>
            </div>

            <div className="md:w-[50%]">
              <img src={ui}></img>
            </div>
          </div>

          <div className="flex flex-col md:flex-row text-white items-center md:px-20 px-5 gap-5">
            <div className="md:w-[50%]">
              <img src={ai}></img>
            </div>

            <div className="md:w-[50%]">
              <h1 className=" font-jakarta font-bold text-[20px]  mb-3">
                AI ENGINEER
              </h1>
              <p>
                i specialize in developing and implementing artificial
                intelligence systems, leveraging machine learning algorithms,
                neural networks, and deep learning techniques.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row text-white items-center md:px-20 px-5 mt-5 ">
            <div className="md:w-[50%]">
              <h1 className="font-jakarta font-bold text-[20px] mb-3">
                FRONTEND DEV
              </h1>
              <p className="font-kanit text-base">
                I am responsible for designing and implement§ing the visual and
                interactive aspects of a website or application, ensuring it is
                both attractive and user-friendly using technologies like HTML,
                CSS, and JavaScript
              </p>
            </div>

            <div className="md:w-[50%]">
              <img src={frontend}></img>
            </div>
          </div>

          <div className=""></div>

          <Footer />
        </div>
      </div>
    </>
  );
}
