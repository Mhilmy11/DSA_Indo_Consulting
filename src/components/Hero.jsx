import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";

export default function Hero() {
  return (
    <div className=" pt-32 font-sans">
      <Container>
        <div className=" px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="">
            <h1 className=" font-extrabold text-3xl md:text-5xl text-lightText">
              DSA INDO CONSULTING
            </h1>
            <h3 className=" py-4 font-extrabold text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#3B82F6]">
              — Clarity for Your Safety!
            </h3>
            <p className=" text-base md:text-lg text-lightText pt-4">
              DSA Consulting is committed to delivering accurate, strategic, and
              client-focused tax solutions. We help our clients navigate
              Indonesia's complex tax regulations with confidence and ensure
              they remain compliant while optimizing their tax efficiency.
            </p>
          </div>

          <div>
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <div className="w-full h-full relative">
                <img
                // // key={b.id}
                // // src={b.slides[0]}
                // // alt={b.title}
                // className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                //   i === idx ? "opacity-100" : "opacity-0 scale-95"
                // }`}
                />
                <div className="absolute left-6 bottom-6 bg-white/6 px-4 py-3 rounded-2xl backdrop-blur-sm border border-white/8">
                  <div className="text-sm font-semibold"> Foto Tumpengan</div>
                  <div className="text-xs text-gray-300">
                    Committed • Accurate • Strategic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
