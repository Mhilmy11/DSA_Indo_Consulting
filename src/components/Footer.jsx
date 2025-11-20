import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import LogoDSA from "../assets/dsa-logo-nobg.png";

import Container from "./Container";

export default function Footer({ onViewTeams, onViewServices }) {
  return (
    <div className=" pt-20 font-sans">
      <div className=" bg-gradient-to-b from-[#021C3A] to-[#042E63] py-6">
        <Container>
          <div className=" px-4">
            <div className=" flex items-center gap-4">
              <img
                className=" w-20 bg-white p-1 rounded-lg"
                src={LogoDSA}
                alt="logo-dsa-footer"
              />
              <div>
                <h1 className=" font-bold text-lightText text-xl">
                  DSA Consulting INDO
                </h1>
                <h1 className=" text-accent text-xs">
                  PT. DSA INDO CONSULTING
                </h1>
              </div>
            </div>

            <div className=" py-6">
              <p className=" text-gray-400">
                Graha Persada Office Park, Jl. KH. Noer Ali No.3A, Kayuringin
                Jaya, South Bekasi, West Java, Indonesia.
              </p>
            </div>

            <div className=" flex items-center gap-6">
              <button
                onClick={onViewTeams}
                className=" cursor-pointer hover:text-gray-400 text-white font-semibold"
              >
                Our Teams
              </button>
              <button
                onClick={onViewServices}
                className=" cursor-pointer hover:text-gray-400 text-white font-semibold"
              >
                Our Services
              </button>
            </div>

            <div className=" h-0.5 w-full bg-white mt-10 mb-5"></div>

            <div className=" md:flex justify-between items-center">
              <div className="text-sm mt-3 italic text-accent">
                © {new Date().getFullYear()} KOPIJATIGOTA — All rights reserved
              </div>

              <div className=" text-lightText flex items-center gap-4 pt-5 md:pt-0">
                <button
                  onClick={() =>
                    window.open(
                      "https://id.linkedin.com/company/dsa-indo-consulting",
                      "_blank"
                    )
                  }
                  className=" cursor-pointer hover:text-gray-400"
                >
                  <FaLinkedin size={30} />
                </button>

                <button
                  onClick={() =>
                    (window.location.href =
                      "mailto:info@dsaindoconsulting.co.id")
                  }
                  className=" cursor-pointer hover:text-gray-400"
                >
                  <HiOutlineMail size={30} />
                </button>

                <button
                  onClick={() =>
                    window.open("https://wa.me/6281385269507", "_blank")
                  }
                  className=" cursor-pointer hover:text-gray-400"
                >
                  <FaWhatsapp size={30} />
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/dsaindoconsulting/",
                      "_blank"
                    )
                  }
                  className=" cursor-pointer hover:text-gray-400"
                >
                  <FaInstagram size={30} />
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/C7bPsFGaUJqyHBLB7",
                      "_blank"
                    )
                  }
                  className=" cursor-pointer hover:text-gray-400"
                >
                  <MdLocationPin size={30} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
