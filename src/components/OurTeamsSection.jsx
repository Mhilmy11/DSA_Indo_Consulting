import Container from "./Container";
import OurTeamImage from "../assets/our-team.png";
import FramerMotion from "./FramerMotion";

export default function OurTeamsSection({ teamsRef }) {
  return (
    <div ref={teamsRef} className="py-7 font-sans overflow-x-hidden">
      <Container>
        <div className="mx-1 px-6 md:px-10 py-10">
          <h3 className="font-bold text-[#184B8F] text-2xl md:text-4xl">
            Our Teams
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
            <FramerMotion animation="zoom-in">
              <div className="bg-white p-6 rounded-xl shadow border border-[#D8E4F5] hover:shadow-lg transition">
                <div className="flex justify-center">
                  <img className="w-36" src={OurTeamImage} alt="" />
                </div>
                <p className="pt-3 text-center font-semibold text-[#1E5DB3] text-xl">
                  Dudung Kurniawan, S.E., M.Si.
                </p>
              </div>
            </FramerMotion>

            <FramerMotion animation="zoom-in" delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow border border-[#D8E4F5] hover:shadow-lg transition">
                <div className="flex justify-center">
                  <img className="w-36" src={OurTeamImage} alt="" />
                </div>
                <p className="pt-3 text-center font-semibold text-[#1E5DB3] text-xl">
                  Sigit Priyanto, S.E.
                </p>
              </div>
            </FramerMotion>
          </div>
        </div>
      </Container>
    </div>
  );
}
