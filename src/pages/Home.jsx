import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import hand from "../assets/hand.png";
import introimg from "../assets/introimg.png";
import hireme from "../assets/hireme.png";
import view from "../assets/view.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import hero2 from "../assets/hero2.mp4";
import FullScroller from "../components/FullScroller";
import slider from "../assets/slider.png";
import abigail2 from "../assets/abigail2.png";
import hire1 from "../assets/hire1.png";
import cv from "../assets/cv.png";
import netflix from "../assets/netflix.png";
import birdy from "../assets/birdy.png";
import red from "../assets/red.png";
import numbers from "../assets/numbers.png";
import testimonial from "../assets/testimonial.png";
import motun from "../assets/motun.png";
import switching from "../assets/switching.png";
import viewall from "../assets/viewall.png";
import side1 from "../assets/side1.png";
import side2 from "../assets/side2.png";
import Footer from "../components/Footer";

export default function Home() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerthrice: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerthrice: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerthrice: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerthrice: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerthrice: true });
  const { ref: ref6, inView: inView6 } = useInView({ triggeronce: true });
  const { ref: ref7, inView: inView7 } = useInView({ triggeronce: true });
  const { ref: ref8, inView: inView8 } = useInView({ triggerthrice: true });
  const { ref: ref9, inView: inView9 } = useInView({ triggerfive: true });
  const { ref: ref10, inView: inView10 } = useInView({ triggerthrice: true });
  const { ref: ref11, inView: inView11 } = useInView({ triggerthrice: true });

  useEffect(() => {
    console.log("Element 1 in view:", inView1);
    console.log("Element 2 in view:", inView2);
    console.log("Element 3 in view:", inView3);
    console.log("Element 4 in view:", inView4);
    console.log("Element 5 in view:", inView5);
    console.log("Element 6 in view:", inView6);
    console.log("Element 7 in view:", inView7);
    console.log("Element 8 in view:", inView8);
    console.log("Element 9 in view:", inView8);
    console.log("Element 10 in view:", inView10);
    console.log("Element 11 in view:", inView11);
  }, [
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
    inView7,
    inView8,
    inView9,
    inView10,
    inView11,
  ]);

  return (
    <>
      <NavBar />
      <div className="bg-[#161513] min-h-[100vh]">
        <div className=" container-w flex flex-col md:flex-row gap-5 md:leading-[60px] leading-[30px] md:mb-[17px] mb-[30px] items-center md:px-20 px-5 p-10">
          <div
            ref={ref1}
            className={`w-full ${inView1 ? "animation-slide-in-left" : ""}`}
          >
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
              <p className="md:text-[20px]">
                I design the designerable, I have design skills and prototyping
                skills, looking for that pretty designer she is right here.
              </p>
            </div>
            <div className="flex gap-5 pb-5">
              <a href="/cont">
                <img src={hireme} alt="hire me" />
              </a>

              <img src={view} alt="view" />
            </div>
            <div className="text-white">
              <p className="pb-5 text-xl">Follow Me</p>
              <div className="flex gap-4">
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
          <div
            ref={ref2}
            className={`w-full bg-[#161513] ${
              inView2 ? "animation-slide-in-right" : ""
            }`}
          >
            <video
              className="bg-[#161513] md:h-[750px] w-full"
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

        <div className="md:mb-[50px] mb-[20px] container-w ">
          <FullScroller image={slider} />
        </div>

        <div className="text-white flex flex-col md:flex-row md:w-[100%] gap-5 items-center container-w ">
          <div
            ref={ref3}
            className={`md:w-[50%] ${inView3 ? "animation-slide-in-left" : ""}`}
          >
            <img
              src={abigail2}
              className="h-full w-full object-cover"
              alt="abigail2"
            />
          </div>
          <div
            ref={ref4}
            className={`md:w-[50%] mb-8 px-2 ${
              inView4 ? "animation-slide-in-right" : ""
            }`}
          >
            <div>
              <h1 className="md:text-[60px] text-[30px]">
                Need Creative Design?
              </h1>
              <h2 className="flex md:text-[50px] text-[30px] md:mb-[30px]">
                I Can Help You!
              </h2>
              <p className="mb-5 md:text-[20px] md:leading-[60px] leading-[30px]">
                I am the Designerable—a skilled designer with expertise in both
                design and prototyping. My toolkit includes Figma and Adobe
                Illustrator, and I possess a basic understanding of frontend
                development. If you're looking for the designer, look no
                further, because you're right here.
              </p>
              <div className="flex gap-3 md:w-[300px] w-[200px]">
                <div className="">
                  <a href="/cont">
                    <img src={hire1}></img>
                  </a>
                </div>
                <div className="">
                  <img src={cv}></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#000000] pt-12 w-[100%] p-10 ">
          <div className="text-center container-w">
            <span className="bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] bg-clip-text text-transparent text-3xl">
              Selected Projects
            </span>
            <p className="text-white mt-3 md:text-[20px] p-2 mb-10">
              I can design nice and beautiful designs with either a mobile or
              web interface. <br /> We also deal in graphics design and web
              development.
            </p>
            <div className="flex flex-col md:flex-row justify-center px-[25px] gap-4 mb-5">
              <div
                ref={ref5}
                className={`w-full ${inView5 ? "animate-slide-left" : ""}`}
              >
                <img
                  src={netflix}
                  className="h-full w-full"
                  alt="Netflix Project"
                />
              </div>

              <div
                ref={ref6}
                className={`w-full ${inView6 ? "animate-slide-right" : ""}`}
              >
                <img src={red} className="h-full w-full" alt="Red Project" />
              </div>

              <div
                ref={ref7}
                className={`w-full ${inView7 ? "animate-slide-right" : ""}`}
              >
                <img src={birdy} className="h-full w-full" alt="Red Project" />
              </div>
            </div>
            <div className="items-center">
              <img src={numbers}></img>
            </div>
          </div>
        </div>

        <div className="bg-[#161513]  gap-3 flex flex-col md:flex-row px-5 w-[100%] items-center p-5 container-w  ">
          <div
            ref={ref9}
            className={`md:w-[50%] text-white ${inView9 ? "zoom-in" : ""}`}
          >
            <img src={motun} alt="Motun" className="w-full" />
          </div>

          <div
            ref={ref8}
            className={`md:w-[50%] text-white ${
              inView8 ? "animation-slide-in-right" : ""
            }`}
          >
            <h1 className="text-[35px]  ">Testimonial</h1>
            <p className="md:text-[20px] md:leading-[60px] leading-[30px]">
              The designs are nothing short of amazing, showcasing her
              exceptional talent and dedication to her craft. She possesses a
              profound understanding of user needs and consistently cultivates
              captivating experiences that resonate deeply. Her work exudes a
              vibrant energy that captivates audiences and sets a new standard
              in design excellence.
            </p>
            <div className="mb-[30px]">
              <h2 className="text-white">By Motun</h2>
              <h3 className="text-white">A User</h3>
            </div>

            <div className="">
              <img src={switching} alt="Switching"></img>
            </div>
          </div>
        </div>

        <div className=" md:px-20  bg-[#000000] p-8 items-center">
          <div className="container-w">
            <div className="flex justify-between items-center mb-9 ">
              <span className="bg-gradient-to-r from-[#B16CEA] via-[#FF7460] to-[#FFA84B] bg-clip-text text-transparent text-3xl">
                Recent Blogs
              </span>
              <img src={viewall}></img>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <img
                ref={ref10}
                src={side1}
                className={`w-full ${inView10 ? "zoom-in" : ""}`}
              />
              <img
                ref={ref11}
                src={side2}
                className={`w-full ${inView11 ? "zoom-in" : ""}`}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
