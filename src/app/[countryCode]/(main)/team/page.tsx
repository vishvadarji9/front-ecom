// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Card } from '@modules/home/component/card';
// import TeamMember from '@modules/home/component/TeamMember';


// const teamMembers = [
//       {
//             name: "Radhika Patel",
//             role: "Full Stack Developer",
//             image: "/images/radhika3.jpg",
//             instagram: "https://www.instagram.com/radhiika.__/?utm_source=qr&igsh=MXNjYW85NXhtZ29rYg%3D%3D",
//             linkedin: "https://www.linkedin.com/in/radhika-patel-932142243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
//             github: "https://github.com/radhikaa-patel"
//       },
//       {
//             name: "Vishva Darji",
//             role: "Full Stack Developer",
//             image: "/images/vishvadarji1.jpg",
//             instagram: "https://www.instagram.com/vishva_darji1893?igsh=MW1sdW9maWx5azBheg==",
//             linkedin: "https://www.linkedin.com/in/vishva-darji-556744282/",
//             github: "https://github.com/vishvadarji9"
//       },
//       {
//             name: "Vishva Patel",
//             role: "Frontend Developer",
//             image: "/images/vishvapatel1.jpg",
//             instagram: "https://www.instagram.com/vishu_patel_0912?igsh=eXN5Z3Vlb3Z3eHk4",
//             linkedin: "https://www.linkedin.com/in/vishva-patel-809757249/",
//             github: "https://github.com/vishvapatel0912"
//       },
//       {
//             name: "Vishva Maradia",
//             role: "Full Stack Developer",
//             image: "/images/vishvamaradia1.jpg",
//             instagram: "https://www.instagram.com/vishvamaradia25?igsh=MWh3NmZsYXU4OXpvcg==",
//             linkedin: "https://www.linkedin.com/in/vishva-maradia-61798524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             github: "https://github.com/Vishvamaradia25"
//       },
//       {
//             name: "Meshva Patel",
//             role: "Frontend Developer",
//             image: "/images/meshva1.jpg",
//             instagram: "https://www.instagram.com/ashvin4957?igsh=bjcwc3J1YjFqMzVw",
//             linkedin: "https://www.linkedin.com/in/meshva-patel-b8818b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             github: "https://github.com/MESHVA-PATEL398"
//       },
//       {
//             name: "Prachi Prajapati",
//             role: "Frontend Developer",
//             image: "/images/prachi1.jpg",
//             instagram: "https://www.instagram.com",
//             linkedin: "https://www.linkedin.com/in/prachi-prajapati-067b3a233/",
//             github: "https://github.com/PRACHI1013"
//       },
//       {
//             name: "Kanvi Patel",
//             role: "Frontend Developer",
//             image: "/images/kanvi1.jpg",
//             instagram: "https://www.instagram.com",
//             linkedin: "https://www.linkedin.com/in/kanvi-patel-a67a86266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             github: "https://github.com/kanvi1202"
//       },
//       {
//             name: "Aenal Patani",
//             role: "Frontend Developer",
//             image: "/images/aenal1.jpg",
//             instagram: "https://www.instagram.com/aenal1604_?igsh=eXJ5bjMxMnFpMTRh",
//             linkedin: "https://www.linkedin.com/in/aenal-patani-0b6a53285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//             github: "https://github.com/aenalpatani"
//       }
// ];

// const Team: React.FC = () => {
//       return (
//             <div className="team-page text-center p-5 bg-gradient-to-l ">
//                   {/* <p className="text-3xl font-bold">Meet Our Team</p> */}
//                   {/* <h1 className="text-4xl font-extrabold font-cursive">SheDevelops</h1> */}
//                   <div className="flex items-center justify-center"><Image src={require('../../../../../public/SheDevelops3.png')} alt={"SheDevelops"} height={80} width={400}/></div>
//                   <div className="flex justify-center items-centre">
//                         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5" >
//                               {teamMembers.map((member, index) => (
//                                     <div className="flex justify-center items-center">
//                                           <Card className="flex-wrap justify-center items-center h-68 w-60 bg-orange-50">
//                                                 <TeamMember
//                                                       key={index}
//                                                       name={member.name}
//                                                       role={member.role}
//                                                       image={member.image}
//                                                       instagram={member.instagram}
//                                                       linkedin={member.linkedin}
//                                                       github={member.github}
//                                                 />
//                                           </Card>
//                                     </div>
//                               ))}
//                         </div>
//                   </div>
//             </div>
//       );
// };

// export default Team;