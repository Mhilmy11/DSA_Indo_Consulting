import Container from "./Container";

import Client1 from "../assets/clients/PT Dua Putra Perkasa Pratama.jpg";
import Client2 from "../assets/clients/PT Gerbang Digital Nusantara - Panjang.jpg";
import Client3 from "../assets/clients/PT Gracia Pelita Abadi.png";
import Client4 from "../assets/clients/PT Karya Indah Pertiwi.jpg";
import Client5 from "../assets/clients/PT Kautsar Group International.png";
import Client6 from "../assets/clients/PT King Food.jpg";
import Client7 from "../assets/clients/PT Mustika Eka Unggul.png";
import Client8 from "../assets/clients/PT Putra Multimedia Kencana.jpg";
import Client9 from "../assets/clients/PT Universal Agri Bisnisindo.jpg";
import Client10 from "../assets/clients/PT Walletku Indompet Indonesia.jpg";
import FramerMotion from "./FramerMotion";

export default function OurClient() {
  return (
    <div className=" mb-20">
      <Container>
        <FramerMotion animation="zoom-in">
          <div>
            <h2 className="font-bold text-[#184B8F] text-2xl md:text-4xl pb-10">
              Our Clients
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
              <img src={Client1} alt="client-1" className="w-28" />
              <img src={Client2} alt="client-2" className="w-28" />
              <img src={Client3} alt="client-3" className="w-20" />
              <img src={Client4} alt="client-4" className="w-24" />
              <img src={Client5} alt="client-5" className="w-20" />
              <img src={Client6} alt="client-6" className="w-20" />
              <img src={Client7} alt="client-7" className="w-32" />
              <img src={Client8} alt="client-8" className="w-20" />
              <img src={Client9} alt="client-9" className="w-20" />
              <img src={Client10} alt="client-10" className="w-20" />
            </div>
          </div>
        </FramerMotion>
      </Container>
    </div>
  );
}
