import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {


  return (
    <section id="about" className="bg-[#11283f]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-2 px-6 xl:gap-16 ">

        <div id="about_header" className="md:px-15">
          <h2  className="font-georgia text-2xl md:text-5xl text-[#d09c29] mb-2 text-center">About Me</h2>
          <p id="paragraph1" className="font-georgia text-center md:text-[18px]">My name is Thabang Xaba, an aspiring software developer from a small town called Boipatong, around Vaal Triangle. I have a passion for creating smart, meaningful digital experiences that solve real-world problems.</p>

          <h3 className="md:text-5xl text-2xl text-center font-georgia text-[#d09c29] mt-10">Why I'm Applying</h3>

          <p className="text-center font-georgia md:text-[18px] mt-2">
            I’m applying to the FNB App Academy because I believe it’s the ideal platform to elevate my development skills while working on solutions that matter in the real world.<br /> <br /> I want to learn from the best, grow with like-minded peers, and contribute to projects that push the boundaries of fintech innovation in South Africa. This is an opportunity to not just learn, but to build with purpose.
            </p>
        </div>

        <div className="flex justify-end pr-25">                
          <img
            src="/images/law.png"
            alt="about image"
            className="hidden md:block py-20 md:w-100 h-auto"
          />
        </div>
        
      </div>
    </section>
  )
}

export default About;