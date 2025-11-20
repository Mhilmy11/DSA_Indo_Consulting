import Container from "./Container";

import HeroImage from "../assets/persada-office-park-1.jpg";
import FramerMotion from "./FramerMotion";

export default function Hero({ onViewAbout, onViewContact }) {
  return (
    <div className=" pt-32 pb-20 md:pb-40 font-sans">
      <Container>
        <div className=" px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <FramerMotion animation="fade-left">
              <h1 className=" font-extrabold text-3xl md:text-5xl text-lightText">
                DSA INDO CONSULTING
              </h1>
            </FramerMotion>

            <FramerMotion animation="fade-left">
              <h3 className=" py-4 font-extrabold text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#3B82F6]">
                — Clarity for Your Safety!
              </h3>
            </FramerMotion>

            <FramerMotion>
              <p className=" text-base md:text-lg text-lightText py-4">
                We help our clients navigate Indonesia's complex tax regulations
                with confidence and ensure they remain compliant while
                optimizing their tax efficiency.
              </p>

              <div className=" flex gap-4 font-semibold text-lightText">
                <button
                  onClick={onViewContact}
                  className=" bg-gradient-to-r from-[#64FFDA] to-[#3B82F6] rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition duration-300"
                >
                  Talk to an Expert
                </button>
                <button
                  onClick={onViewAbout}
                  className=" border border-gray-700 rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </FramerMotion>
          </div>

          <div>
            <FramerMotion animation="fade-right">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                <div className="w-full h-full relative">
                  <img src={HeroImage} alt="hero-image-dsa" />
                  <div className=" hover:scale-105 transition duration-300 absolute left-6 bottom-6 bg-white/6 px-4 py-3 rounded-2xl backdrop-blur-sm border border-white/8">
                    <div className="text-sm font-semibold text-accent">
                      Persada Office Park
                    </div>
                    <div className="text-xs text-gray-300">
                      Committed • Accurate • Strategic
                    </div>
                  </div>
                </div>
              </div>
            </FramerMotion>
          </div>
        </div>
      </Container>
    </div>
  );
}
