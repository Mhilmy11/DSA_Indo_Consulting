import Container from "./Container";

import HeroImage from "../assets/hero-image.jpeg";
import FramerMotion from "./FramerMotion";

export default function Hero({ onViewAbout, onViewContact }) {
  return (
    <div className="pt-32 md:pb-40 pb-20 font-sans overflow-x-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <FramerMotion animation="fade-left">
              <h1 className="font-extrabold text-3xl md:text-5xl text-[#184B8F]">
                DSA CONSULTING
              </h1>
            </FramerMotion>

            <FramerMotion animation="fade-left">
              <h3 className="py-4 font-semibold text-2xl md:text-3xl text-[#4F4F4F]">
                — Clarity for Your Safety!
              </h3>
            </FramerMotion>

            <FramerMotion animation="fade-left">
              <p className="text-base md:text-lg text-slate-700 py-4">
                We help our clients navigate Indonesia's complex tax regulations
                with confidence and ensure they remain compliant while
                optimizing their tax efficiency.
              </p>

              <div className="flex gap-4 font-semibold text-lightText">
                <button
                  onClick={onViewContact}
                  className=" bg-gradient-to-r from-[#74F8D4] to-[#8BD1FF] text-black shadow hover:opacity-90 rounded-full px-4 py-2 hover:scale-105 transition cursor-pointer"
                >
                  Talk to an Expert
                </button>

                <button
                  onClick={onViewAbout}
                  className="border border-[#1E5DB3] text-[#1E5DB3] rounded-full px-4 py-2 hover:scale-105 transition cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </FramerMotion>
          </div>

          <div>
            <FramerMotion animation="fade-right">
              <div className=" aspect-auto rounded-xl overflow-hidden shadow-2xl border border-white/5">
                <div className="w-full h-full relative">
                  <img src={HeroImage} alt="hero-image-dsa" />
                  <div className=" hover:scale-105 transition duration-300 absolute left-6 bottom-6 bg-white/6 px-4 py-3 rounded-2xl backdrop-blur-sm border border-white/8">
                    <div className="text-sm font-semibold text-lightText">
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
