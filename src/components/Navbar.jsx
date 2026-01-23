import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import LogoDSA from "../assets/dsa-logo-nobg.png";

import Container from "./Container";

export default function Navbar({ onViewTeams, onViewServices, onViewContact }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-l from-[#184B8F] via-[#1E5DB3] to-[#2F6EC9] backdrop-blur-md shadow-lg overflow-x-hidden">
        <Container>
          <div className="py-4 px-4 flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img
                className="w-16 bg-neutral p-1 rounded-lg"
                src={LogoDSA}
                alt="navbar-dsa-logo"
              />
              <div className=" text-lightText">
                <h1 className="font-bold text-xl">DSA Consulting</h1>
                <h1 className=" text-xs">PT DSA Indo Consulting</h1>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={onViewTeams}
                className="cursor-pointer text-white hover:text-[#74F8D4] transition"
              >
                Our Teams
              </button>
              <button
                onClick={onViewServices}
                className="cursor-pointer text-white hover:text-[#74F8D4] transition"
              >
                Our Services
              </button>
              <button
                onClick={onViewContact}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#74F8D4] to-[#8BD1FF] text-secondary font-medium hover:bg-primary hover:text-lightText transition cursor-pointer"
              >
                Contact Us
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-accent"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </Container>

        {isOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-accent/30 overflow-hidden">
            <div className="flex flex-col items-center space-y-5 py-6">
              <button className="text-lightText hover:text-accent transition">
                Our Teams
              </button>
              <button className="text-lightText hover:text-accent transition">
                Our Services
              </button>
              <button className="px-5 py-2 rounded-full bg-accent text-secondary font-medium hover:bg-primary hover:text-lightText transition">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
