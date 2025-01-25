import React from "react";
import Image from "next/image";
import "./teamcard.css";
import { StaticImageData } from "next/image";

interface TeamCardProps {
  image: string | StaticImageData;
  name: string;
  designation: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, designation }) => {
  return (
    <div className="team-card">
      <div className="image-container">
        <Image
          src={image}
          alt={name}
          className="team-card-image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className="black-box">
          <h3 className="team-card-name">{name}</h3>
          <p className="team-card-designation">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
