import React from "react";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Cont() {
  return (
    <div>
      <div className="bg-[#161513] min-h-screen">
        <div className="">
          <Contact />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
