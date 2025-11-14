import Container from "./Container";
import OurTeamImage from "../assets/our-team.png";

export default function OurTeamsSection({ teamsRef }) {
  return (
    <div ref={teamsRef} className=" py-16 md:py-28 font-sans">
      <Container>
        <div className=" mx-4 px-10 py-14 bg-gradient-to-b from-[#0A2E63] via-[#073B85] to-[#0449A8] rounded-xl shadow-xl">
          <div>
            <h3 className=" font-bold bg-gradient-to-r from-[#A5D4FF] via-[#4AB8FF] to-[#0D63CF] text-transparent bg-clip-text text-2xl md:text-4xl">
              Our Teams
            </h3>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-max text-lightText pt-10">
              <div className=" bg-gradient-to-br from-[#052E70] via-[#0449A8] to-[#0D5DD8] rounded-xl shadow-xl px-2 py-4 w-[250px]">
                <div className=" flex justify-center">
                  <img className=" w-36" src={OurTeamImage} alt="" />
                </div>
                <p className=" pt-3 text-center">
                  Dudung Kurniawan, S.E., M.Si.
                </p>
              </div>
              <div className=" bg-gradient-to-br from-[#052E70] via-[#0449A8] to-[#0D5DD8] rounded-xl shadow-xl px-2 py-4 w-[250px]">
                <div className=" flex justify-center">
                  <img className=" w-36" src={OurTeamImage} alt="" />
                </div>
                <p className=" pt-3 text-center">Sigit Priyanto, S.E.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
