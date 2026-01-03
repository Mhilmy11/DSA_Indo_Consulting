import Container from "./Container";

import HeroImage from "../assets/hero-image.jpeg";
import HeroImage2 from "../assets/persada-office-park-2.jpg";
import FramerMotion from "./FramerMotion";
import { useState, useEffect } from "react";

const FOR_HERO = [
  {
    activity: "Committed • Accurate • Strategic",
    location: "DSA Consulting Office",
    pict: HeroImage,
  },
  {
    activity: "Committed • Accurate • Strategic",
    location: "Persada Office Park",
    pict: HeroImage2,
  },
];

export default function Hero({ onViewAbout, onViewContact }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % FOR_HERO.length), 3000);
    return () => clearInterval(t);
  }, []);

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
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                <div className="w-full h-full relative">
                  {FOR_HERO.map((b, i) => (
                    <img
                      key={b.id}
                      src={b.pict}
                      alt={b.activity}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        i === idx ? "opacity-100" : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                  <div className="absolute left-6 bottom-6 bg-white/6 px-4 py-3 rounded-2xl backdrop-blur-sm border border-white/8">
                    <div className="text-sm font-semibold text-white">
                      {FOR_HERO[idx].location}
                    </div>
                    <div className="text-xs text-gray-300">
                      {FOR_HERO[idx].activity}
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
