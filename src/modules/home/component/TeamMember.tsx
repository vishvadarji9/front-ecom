
// component/TeamMember.tsx

import Image from 'next/image';
import React from 'react';
// import '../../globals.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import {image} from ''

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  instagram: string;
  linkedin: string;
  github: string;

}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, instagram, linkedin, github }) => {
  // const formatImagePath = `/images/${name}`;
  return (
    <div className="team-member text-center mx-4 my-4 ">
      
      <div className="flex items-center justify-center">
        <Image src={`${image}`} alt={`${name}'s photo`} width={150} height={150} className="member-photo w-12 h-12 rounded-full border-spacing-2" /></div>
      <h3 className="mt-3 text-xl font-bold">{name}</h3>
      <p className="text-black-200 mt-3">{role}</p>
      <div className="flex justify-center mt-4 space-x-3 gap-2">
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link mt-3">
          <FaInstagram size={16} className="social-icon mt-3" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link mt-3">
          <FaLinkedin size={16} className="social-icon mt-3" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="social-link mt-3">
          <FaGithub size={16} className="social-icon mt-3" />
        </a>
      </div>
    </div>
  );
};

export default TeamMember;