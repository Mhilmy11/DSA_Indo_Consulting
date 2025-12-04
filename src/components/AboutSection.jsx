import Container from "./Container";

import AboutImage from "../assets/persada-office-park-2.jpg";
import FramerMotion from "./FramerMotion";

export default function AboutSection({ aboutRef, onViewServices }) {
  return (
    <div ref={aboutRef} className="py-10 md:py-20 font-sans overflow-x-hidden">
      <div className=" bg-gradient-to-b from-blue-50 to-blue-100">
        <Container>
          <div className="mx-1 px-6 md:px-10 py-10 overflow-hidden">
            <div className="text-center">
              <h1 className="font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#184B8D] via-[#1E5DB3] to-[#2F6EC9]">
                About DSA Consulting
              </h1>

              <p className="pt-4 text-sm md:text-xl text-[#0A192F]">
                DSA Consulting is committed to delivering accurate and strategic
                solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-5 md:pt-20">
              <FramerMotion animation="zoom-in">
                <div className=" rounded-3xl p-6 md:p-8 border border-[#E4ECF4] hover:shadow-lg transition">
                  <h6 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0A192F] to-primary text-xl md:text-2xl">
                    Who We Are
                  </h6>

                  <p className="py-4 text-[#4F4F4F] leading-relaxed text-justify">
                    <span className="font-bold text-primary">
                      DSA CONSULTING
                    </span>{" "}
                    is a trusted tax consulting firm which provide professional
                    and comprehensive tax consulting services for individuals,
                    businesses, and organizations across various industries.
                  </p>

                  <p className="text-[#4F4F4F] leading-relaxed text-justify">
                    With a team of experienced and dedicated consultants, DSA
                    Consulting is{" "}
                    <span className=" font-bold text-primary">
                      committed to delivering accurate, strategic, and
                      client-focused
                    </span>{" "}
                    tax solutions. We help our clients navigate Indonesia's
                    complex tax regulations with confidence and ensure they
                    remain compliant while optimizing their tax efficiency.
                  </p>

                  <p className="font-semibold italic text-right my-6 text-lg bg-clip-text text-transparent bg-gradient-to-l from-[#0A192F] via-[#0449a8] to-blue-500">
                    INTEGRITY, PROFESSIONALISM, EXCELLENCE.
                  </p>

                  <button
                    onClick={onViewServices}
                    className="bg-gradient-to-r from-primary to-sky-500 text-white px-5 py-3 rounded-lg hover:scale-105 transition cursor-pointer"
                  >
                    See Our Service
                  </button>
                </div>
              </FramerMotion>

              <FramerMotion animation="zoom-out">
                <div className="relative group">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={AboutImage}
                      alt="about"
                      className="w-full h-[420px] md:h-[510px] object-cover"
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

                  <div className="absolute inset-0 md:-inset-10 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-60 animate-pulse-slow"></div>
                </div>
              </FramerMotion>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
