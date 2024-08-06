import React from "react";
import NavBar from "../components/NavBar";
import hand from "../assets/hand.png";
import introimg from "../assets/introimg.png";
import hireme from "../assets/hireme.png";
import view from "../assets/view.png";
import hireicon from "../assets/hireicon.png";
import socials from "../assets/socials.png";
import hero2 from "../assets/hero2.mp4";
import scroller from "../assets/scroller.png";
import scroller2 from "../assets/scroller2.png";
import FullScroller from "../components/FullScroller";
import ImageScroller from "../components/ImageScroller";
import ImageSlider from "../components/ImageSlider";
import about from "../assets/about.png";
import abigail1 from "../assets/abigail1.png";
import hire1 from "../assets/hire1.png";
import cv from "../assets/cv.png";
import slider from "../assets/slider.png";
import abigail2 from "../assets/abigail2.png";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-[#161513] min-h-[100vh] p-5 md:p-20 w-full">
        <div className="flex flex-col md:flex-row gap-5 leading-[50px] md:mb-[17px] mb-[-30px]">
          <div className="w-full">
            <h1 className="text-white flex items-center gap-3 text-3xl pb-5">
              Hi! <img src={hand} className="h-[40px]" alt="hand" />
            </h1>

            <h2 className="text-white text-3xl pb-5">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] bg-clip-text text-transparent">
                Alabi Abigail
              </span>
            </h2>
            <div className="text-white flex items-center gap-5">
              <div>
                <img src={introimg} alt="intro" />
              </div>
              <div>
                <h2>Ui/Ux Designer</h2>
              </div>
            </div>
            <div className="text-white pb-5">
              <p>
                I design the designerable, I have design skills and prototyping
                skills, looking for that pretty designer she is right here.
              </p>
            </div>

            <div className="flex gap-5 pb-5">
              <img src={hireme} alt="hire me" />
              <img src={view} alt="view" />
            </div>

            <div className="text-white">
              <p className="pb-5 text-xl">Follow Me</p>
              <img src={socials} alt="socials" />
            </div>
          </div>

          <div className="w-full bg-[#161513]">
            <video
              className="bg-[#161513] h-[500px] w-full"
              src={hero2}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload"
            />
          </div>
        </div>

        <div className="mb-[20px]">
          <FullScroller image={slider} />
        </div>

        <div className="text-white flex  flex-col md:flex-row md:w-[100%] gap-5 items-center">
          <div className="md:w-[50%] w-full">
            <img src={abigail2} className="h-full w-full object-cover"></img>
          </div>

          <div className="md:w-[50%] ">
            <div className="">
              <h1 className="md:text-[60px] text-[50px]">
                Need Creative Design?
              </h1>
              <h2 className="flex md:text-[50px] text-[40px] md:mb-[30px]">
                I Can Help You!
              </h2>
              <p className=" mb-5 md:text-[25px] text-[20px]">
                I am the Designerable—a skilled designer with expertise in both
                design and prototyping.My toolkit includes Figma and Adobe
                Illustrator, and I possess a basic understanding of frontend
                development. If you're looking for the designer, look no
                further, because you're right here.
              </p>

              <div className="flex gap-3 md:w-[200px] w-[100px]">
                <img src={hire1}></img>
                <img src={cv}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
