import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const Hero = () => {
    
  useGSAP(() => {
    const paragraphSplit = new SplitText("#sub1", {
      type: "lines"
    });

    const paragraph2Split = new SplitText("#sub2", {
      type: "lines"
    });

    gsap.fromTo(paragraph2Split.lines, {
      opacity: 0, x: -40,
    }, {
      opacity: 1, x: 0, ease: "power1.inOut", stagger: 0.5, duration: 2.3, delay: 0.5,
    });


    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      x: 75,
      duration: 2.3,
      ease: "power1.inOut",
      stagger: 0.5,
      delay: 0.5,
    });

    const timeline = gsap.timeline();

    timeline.from(
      "#firstName",
      { x: 100,
        opacity: 0.2,
        duration: 2.5,
        stagger: 1.5
      }, "first"
    )

    
    timeline.fromTo(
      "#lastName",
      { x: -50,
        opacity: 0.1,            
      },
      { x: 0,
        opacity: 1,
        duration: 2.5,
        stagger: 0.6
      }, "first"
    )

    timeline.from("#marble",
      { duration: 3.2,
        scale: 1.2,
      }, "first"
    )

  }, []);


  return (
      <section id="hero" className="text-white">
          <div className="flex-center flex-col min-h-dvh p-5 relative">
            
            <img
              src="/images/bust.png"
              alt="bust"
              id="marble"
              className="absolute w-40 h-auto md:w-75 mt-25 md:mt-25 md:ml-7"
            />

              <div>         
                <img
                  src="/images/flare.png"
                  alt="flare"
                  className="w-60 h-auto md:w-110 mt-25 md:mt-25"
                />
              </div>

              <div className="absolute w-full flex justify-between items-center" style={{ top: '43%' }}>
                <div className="hidden md:block pl-10 lg:pl-40">
                  <h1 id="firstName" className="text-[#d09c29]">THABANG</h1>
                  <p id="sub1" className="mt-5">I bring creativity and code together to<br /> 
                  deliver
                  seamless, high-impact web apps. <br />
                  This is where visuals meet performance.
                  </p>
                </div>

                <div className="hidden md:block lg:pr-78 pr-20">
                  <h1 id="lastName" className="text-[#d09c29]">XABA</h1>
                  <p id="sub2" className="mt-5">
                    Discere <br />
                    Est <br />
                    Potentia</p>
                </div>
              </div>
              
            </div>
      </section>
  )
}

export default Hero;
