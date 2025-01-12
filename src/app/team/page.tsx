import React from "react";

import { teamMembersList } from "@/data/teamMembersList";
import "./team.css";
import TeamCard from "@/components/teamcard/TeamCard";
import NavBar from "@/components/navbar/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="team-heading" style={{ marginTop: 250 }}>
        <TeamCard
          image="/images/mars1.jpg"
          name="Our Team"
          designation="Meet the team"
        />
      </div>
    </>
  );
};

export default page;
