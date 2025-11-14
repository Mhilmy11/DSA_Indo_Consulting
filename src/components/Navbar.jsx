import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import LogoDSA from "../assets/dsa-logo-nobg.png";

import Container from "./Container";

export default function Navbar({ onViewTeams, onViewServices }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/90 backdrop-blur-md shadow-lg">
        <Container>
          <div className=" py-4 px-4 flex items-center justify-between">
            <div className=" flex gap-2 items-center">
              <img
                className=" w-16 bg-neutral p-1 rounded-lg"
                src={LogoDSA}
                alt="navbar-dsa-logo"
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

            <div className="hidden md:flex space-x-8">
              <button
                onClick={onViewTeams}
                className=" cursor-pointer text-lightText hover:text-accent transition-colors duration-300"
              >
                Our Teams
              </button>
              <button
                onClick={onViewServices}
                className=" cursor-pointer text-lightText hover:text-accent transition-colors duration-300"
              >
                Our Service
              </button>
              <button className="px-4 py-2 rounded-full bg-accent text-secondary font-medium hover:bg-primary hover:text-lightText transition-all duration-300 cursor-pointer">
                Contact Us
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-accent focus:outline-none"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </Container>

        {isOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-accent/30 animate-fade-in-down">
            <div className="flex flex-col items-center space-y-5 py-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-lightText hover:text-accent transition"
              >
                Our Teams
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-lightText hover:text-accent transition"
              >
                Our Service
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-full bg-accent text-secondary font-medium hover:bg-primary hover:text-lightText transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
