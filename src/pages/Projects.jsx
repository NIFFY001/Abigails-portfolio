import React from "react";
import line from "../assets/Line.svg";
import Card from "../components/Card";
import spotify from "../assets/spotify.jpeg";
import spaceserve from "../assets/spaceserve.png";
import samtlgroup from "../assets/samtlgroup.png";
import group from "../assets/group.jpeg";
import bikers from "../assets/bikers.jpeg";
import axess from "../assets/axess.png";
import axessweb from "../assets/axessweb.png";
import NavBar from "../components/NavBar";

function Projects() {
  return (
    <>
      <NavBar />
      <section
        id="work"
        className="bg-black text-white px-5 md:px-20 py-10 min-h-screen"
        style={{ borderTop: "1px solid #4b5563" }}
      >
        {data.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            title={project.title}
            des={project.des}
            webLink={project.webLink}
            tools={project.tools}
            gitLink={project.gitLink}
          />
        ))}
      </section>
    </>
  );
}

export default Projects;

const data = [
  {
    img: spaceserve,
    title: "Spaceserve Website",
    des: "Spaceserve Website was designed for an IT consulting company dedicated to transforming business through cutting-edge technology solutions.",
    tools: "Figma, Canva",
    webLink: "https://spaceserve-website-pi.vercel.app/",
    gitLink:
      "https://drive.google.com/file/d/1wCHzMCYSRaGOjAvpV2j6mo6Hei136lV5/view?usp=drive_link",
  },
  {
    img: spotify,
    title: "Spotify Clone",
    des: "Spotify website Redesigned using their Brand Colour.",
    tools: "Figma, Canva",
    webLink:
      "https://drive.google.com/file/d/1dQ0nw9mEOJDIDx3CVIdzb5oaq9rFuZ-I/view?usp=sharing",
  },
  {
    img: group,
    title: "Samtl Group Website",
    des: "Samtl Group website was designed for an organization with various subsidiaries. The group website shows what each of the Subsidiary does.",
    tools: "Figma, Canva",
    webLink: "https://samtl-group-website.vercel.app/",
    gitLink:
      "https://drive.google.com/file/d/178Iw2j3DnwOwxiHFxLHOlF2TMSPA171h/view?usp=drive_link",
  },
  {
    img: bikers,
    title: "Bikers Website",
    des: "A Website for a Bike Community, that shows information about the community, pictures, and a page where they can order and buy community vests and jackets..",
    tools: "Figma, Canva",
    webLink: "https://metallic-bullridaz.vercel.app/",
    gitLink: "",
  },
];
