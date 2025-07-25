import React from "react";
import Navbar from "./Navbar";
import imghero from "/aleen3.png";
import github from "/github.png";
import linkedin from "/linkedin.png";
import instagram from "/instagram.png";
import Aleen from "/Aleencv.pdf";
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[600px] flex flex-col items-center">
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />

      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Aleenshylaja K
            </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              Full Stack Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
           Hello, my name is Aleenshylaja K and I'm a Full stack developer skilled in ReactJS and Spring
                        Boot, crafting  dynamic and user-friendly web apps with
                        seamless front-end and powerful back-end solutions.
          </p>

          <div className="flex items-center space-x-4 mb-6">
            <a href="https://github.com/Aleen15">
              <img src={github} alt="github" className="w-11 h-11" />
            </a>
            <a href="https://www.linkedin.com/in/aleenshylaja-k-0683a0252/">
              <img src={linkedin} alt="Linkedin" className="w-11 h-11" />
            </a>
            
            <a href="#">
              <img src={instagram} alt="instagram" className="w-11 h-11" />
            </a>
          </div>
          <a href={Aleen} download>
  <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg">
    Download CV
  </button>
</a>

        </section>
        <figure
  data-aos="fade-up"
  data-aos-delay="500"
  className="flex-1 flex justify-center md:justify-end mt-10"
>
  <div className="rounded-full border-[10px] border-[#8e6cf5] shadow-2xl inline-block">
  <div className="h-[300px] w-[300px] rounded-full overflow-hidden border-[6px] border-[#cd3cf5]">
    <img
      src={imghero}
      alt="Hero Image"
      className="h-full w-full object-cover"
    />
  </div>
</div>


</figure>

      </main>
    </div>
  );
}
