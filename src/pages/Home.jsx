import React from "react";
import NavBar from "../components/NavBar";
import hand from "../assets/hand.png";
import introimg from "../assets/introimg.png";
import hireme from "../assets/hireme.png";
import view from "../assets/view.png";
import hireicon from "../assets/hireicon.png";
import socials from "../assets/socials.png";
import hero from "../assets/hero.mp4";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-[#161513] min-h-[100vh]  p-5 md:p-20 w-[100%]">
        <div className="flex flex-col md:flex-row gap-5 mb-8">
          <div className="w-[100%]">
            <h1 className="text-white flex items-center gap-3 text-3xl pb-5">
              Hi! <img src={hand} className="h-[40px]"></img>
            </h1>

            <h2 className="text-white text-3xl pb-5">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#B16CEA] via-[#FF7460]  to-[#FFA84B] bg-clip-text text-transparent">
                Alabi Abigail
              </span>
            </h2>
            <div className="text-white flex items-center gap-5">
              <div className="">
                <img src={introimg}></img>
              </div>
              <div className="">
                <h2>Ui/Ux Designer</h2>
              </div>
            </div>
            <div className="text-white  pb-5">
              <p>
                I design the designerable, i have design skills and prototyping
                skills, looking for that pretty designer she is right here.
              </p>
            </div>

            <div className="flex gap-5 pb-5">
              <img src={hireme}></img>
              <img src={view}></img>
            </div>

            <div className="text-white">
              <p className="pb-5 text-xl">Follow Me</p>
              <img src={socials}></img>
            </div>
          </div>

          <div className="w-[100%]">
            <video
              className="bg-none"
              src={hero}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload"
            />
          </div>
        </div>
      </div>
    </>
  );
}
