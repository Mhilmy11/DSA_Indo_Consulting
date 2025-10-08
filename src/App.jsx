import "./App.css";

import { MdConstruction } from "react-icons/md";

import LogoDSA from "./assets/dsa-logo-nobg.png";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-gray-500 h-screen via-white to-gray-500 flex flex-col justify-center items-center">
        <div className="flex items-center gap-5 mb-10">
          <img
            src={LogoDSA}
            alt="Logo-PT"
            className=" md:w-24 w-12 object-contain"
          />
          <span className="text-xl md:text-5xl font-semibold">
            PT. DSA INDO CONSULTING
          </span>
        </div>

        <MdConstruction className="text-yellow-500 text-7xl animate-bounce mb-4" />

        <h1 className="text-xl md:text-3xl font-bold mb-2">
          Website Under Development
        </h1>

        <p className="text-gray-600 text-center">
          Kami sedang membangun sesuatu yang keren. Nantikan update terbaru dari
          kami!
        </p>
      </div>
    </>
  );
}

export default App;
