import React from "react";

import { teamMembersList } from "@/data/teamMembersList";
import "@/components/starbg/starbg.css";
import "./team.css";
import random from "@/images/random.png";
import TeamCard from "@/components/teamcard/TeamCard";

const page = () => {
  return (
    <div className="starry-background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div
        key={-4}
        className="team-container"
        style={{
          display: "flex",
          minHeight: "100vh",

          padding: "20px",
          boxSizing: "border-box",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {teamMembersList.map((member, index) => (
          <div key={index} className="team-card-wrapper">
            <TeamCard
              key={index}
              image={random}
              name={member.name}
              designation={member.designation}
              linkedin={member.linkedin}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
