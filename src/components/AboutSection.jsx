import Container from "./Container";

import AboutImage from "../assets/persada-office-park-2.jpg";
import FramerMotion from "./FramerMotion";

export default function AboutSection({ aboutRef, onViewServices }) {
  return (
    <div ref={aboutRef} className=" py-16 md:py-28 font-sans">
      <Container>
        <div className=" mx-4 px-10 py-14 bg-gradient-to-br from-secondary via-[#052E70] to-primary rounded-xl shadow-xl">
          <div className=" text-center">
            <h1 className=" font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#0EA5E9]">
              About DSA Consulting
            </h1>
            <p className=" pt-4 text-base md:text-xl text-gray-400">
              DSA Consulting is committed to delivering accurate, strategic, and
              client-focused tax solutions.
            </p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 items-center pt-20 gap-10">
            <FramerMotion animation="zoom-in">
              <div className=" bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg">
                <h6 className=" font-bold text-lightText text-xl md:text-2xl">
                  Who We Are
                </h6>
                <p className=" py-4 text-gray-300 leading-relaxed">
                  <span className=" font-bold text-lightText">
                    DSA CONSULTING
                  </span>{" "}
                  is a trusted tax consulting firm which provide professional
                  and comprehensive tax consulting services for{" "}
                  <span className=" font-bold text-lightText">
                    {" "}
                    individuals, businesses, and organizations{" "}
                  </span>{" "}
                  across various industries.
                </p>
                <p className=" text-gray-400 leading-relaxed">
                  With a team of experienced and dedicated consultants, DSA
                  Consulting is{" "}
                  <span className=" font-bold text-lightText">
                    committed to delivering accurate, strategic, and
                    client-focused
                  </span>{" "}
                  tax solutions. We help our clients navigate Indonesia's
                  complex tax regulations with confidence and ensure they remain
                  compliant while optimizing their tax efficiency.
                </p>
                <p className=" font-semibold italic text-right my-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#5EEAD4] via-[#818CF8] to-[#3B82F6]">
                  INTEGRITY, PROFESSIONALISM, EXCELLENCE.
                </p>
                <button
                  onClick={onViewServices}
                  className=" bg-gradient-to-l from-[#5EEAD4] via-[#818CF8] to-[#3B82F6] px-5 py-3 cursor-pointer rounded-lg font-semibold hover:scale-105 transition duration-300"
                >
                  See Our Service
                </button>
              </div>
            </FramerMotion>

            <FramerMotion animation="zoom-out">
              <div className="relative group">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={AboutImage}
                    alt="about-image-dsa"
                    className="w-full h-[510px] object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-bold">
                      “professional and comprehensive tax consulting services”
                    </h3>
                    <p className="text-gray-300 text-sm">
                      individuals, businesses, and organizations.
                    </p>
                  </div>
                </div>
                <div className="absolute -inset-10 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-60 animate-pulse-slow" />
              </div>
            </FramerMotion>
          </div>
        </div>
      </Container>
    </div>
  );
}
