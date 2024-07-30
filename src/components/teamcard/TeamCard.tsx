import React from "react";
import "./teamcard.css";
import { StaticImageData } from "next/image";

interface TeamCardProps {
  image: StaticImageData | string;
  name: string;
  designation: string;
  linkedin?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  designation,
  linkedin,
}) => {
  return (
    <div className="team-card-container" style={{ marginTop: "100px" }}>
      <div className="team-card-wrapper">
        <div className="team-card">
          <div
            className="team-card-front"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="team-card-name">{name}</div>
          </div>
          <div className="team-card-back">
            <div>
              <p>{designation}</p>
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
