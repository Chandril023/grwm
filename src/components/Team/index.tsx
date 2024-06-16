import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Arko Chowdhury",
    designation: "CTO",
    image: "/images/team/cto.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Subhradeep Naskar",
    designation: "CAO",
    image: "/images/team/cto.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Swapnendu Das",
    designation: "CMO",
    image: "/images/team/cto.png",
    facebookLink: "/#",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Meet our diverse and dedicated tech team, pioneering innovation with expertise and passion."
            width="640px"
            center
          />
        </div>
  
        <div className="overflow-x-auto lg:hidden">
          <div className="flex flex-nowrap">
            {teamData.map((team, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-90 -mx-0">
                <SingleTeam team={team} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center -mx-4">
          {teamData.map((team, i) => (
            
              <SingleTeam  key={i} team={team} />
        
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
