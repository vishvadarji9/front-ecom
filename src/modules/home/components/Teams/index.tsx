import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

type Props = {}

const Teams = (props: Props) => {
    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <div className="absolute inset-0 z-0">
                <Image className='p-3'
                    src={require('../../../../../public/images/browns.jpg')}
                    alt={"Background"}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="relative z-10 flex flex-col items-center w-full h-full">
                <div className='flex items-center justify-center mt-10'>
                    <Image src={require('../../../../../public/images/SheDevelops3.png')} alt={"She Develops"} height={200} width={300} />
                </div>
                <div className="text-center p-5">
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2 ">
                                <Image src={require('../../../../../public/images/radhika3.jpg')} alt={"Radhika Patel"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Radhika Patel</h2>
                            <p className="text-gray-600 mb-3">Full Stack Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com/radhiika.__/?utm_source=qr&igsh=MXNjYW85NXhtZ29rYg%3D%3D" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/radhika-patel-932142243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/radhikaa-patel" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>

                        </div>
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/vishvadarji1.jpg')} alt={"Vishva Darji"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Vishva Darji</h2>
                            <p className="text-gray-600 mb-3">Full Stack Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com/vishva_darji1893?igsh=MW1sdW9maWx5azBheg==" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/vishva-darji-556744282/" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/vishvadarji9" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>
                        </div>
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/vishvapatel1.jpg')} alt={"Vishva Patel"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Vishva Patel</h2>
                            <p className="text-gray-600 mb-3">Frontend Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com/vishu_patel_0912?igsh=eXN5Z3Vlb3Z3eHk4" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/vishva-patel-809757249/" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/vishvapatel0912" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>
                        </div>
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/vishvamaradia1.jpg')} alt={"Vishva Maradia"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Vishva Maradia</h2>
                            <p className="text-gray-600 mb-3">Full Stack Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com/vishvamaradia25?igsh=MWh3NmZsYXU4OXpvcg==" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/vishva-maradia-61798524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/Vishvamaradia25" className="text-gray-800 text-xl"><VscGithubInverted /></a>                       </div>
                        </div>
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/meshva1.jpg')} alt={"Meshva Patel"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Meshva Patel</h2>
                            <p className="text-gray-600 mb-3">Frontend Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com/ashvin4957?igsh=bjcwc3J1YjFqMzVw" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/meshva-patel-b8818b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/MESHVA-PATEL398" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>
                        </div>
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/prachi1.jpg')} alt={"Prachi Prajapati"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Prachi Prajapati</h2>
                            <p className="text-gray-600 mb-3">Frontend Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/prachi-prajapati-067b3a233/" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/PRACHI1013" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>
                        </div>


                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/kanvi1.jpg')} alt={"Kanvi Patel"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Kanvi Patel</h2>
                            <p className="text-gray-600 mb-3">Frontend Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/kanvi-patel-a67a86266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/kanvi1202" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>
                        </div>
                        <div className="bg-[#fff7ed] rounded-lg shadow-md text-center justify-center p-5 transform transition duration-300 ease-out hover:scale-105">
                            <div className="flex justify-center items-center mb-2">
                                <Image src={require('../../../../../public/images/aenal1.jpg')} alt={"Aenal Patani"} height={150} width={150} className="rounded-full" />
                            </div>
                            <h2 className="text-xl mb-2 text-gray-800">Aenal Patani</h2>
                            <p className="text-gray-600 mb-3">Frontend Developer</p>
                            <div className="flex justify-center gap-3">
                                <a href="https://www.instagram.com/aenal1604_?igsh=eXJ5bjMxMnFpMTRh" className="text-gray-800 text-xl"><FaInstagramSquare /></a>
                                <a href="https://www.linkedin.com/in/aenal-patani-0b6a53285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-800 text-xl"><FaLinkedin /></a>
                                <a href="https://github.com/aenalpatani" className="text-gray-800 text-xl"><VscGithubInverted /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Teams;

