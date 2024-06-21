import Image from 'next/image';
import React from 'react';
import '../Teams/style.css';
// import '../../../../styles/globals.css';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
type Props = {}

const Teams = (props: Props) => {
    return (
        <div className='body bg-blur'>
            <div className='flex items-center justify-center'>
                <Image src={require('../../../../../public/SheDevelops3.png')} alt={"She Develops"} height={200} width={300} />
            </div>
            <div className="container flex items-center justify-center">
                <div className="grid">
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/radhika3.jpg')} alt={"Radhika Patel"} height={150} width={150} />
                        </div>
                        <h2>Radhika Patel</h2>
                        <p>Full Stack Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/vishvadarji1.jpg')} alt={"Vishva Darji"} height={150} width={150} />
                        </div>
                        <h2>Vishva Darji</h2>
                        <p>Full Stack Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/vishvapatel1.jpg')} alt={"Vishva Patel"} height={150} width={150} />
                        </div>
                        <h2>Vishva Patel</h2>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/vishvamaradia1.jpg')} alt={"Vishva Maradia"} height={150} width={150} />
                        </div>
                        <h2>Vishva Maradia</h2>
                        <p>Full Stack Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/meshva1.jpg')} alt={"Meshva Patel"} height={150} width={150} />
                        </div>
                        <h2>Meshva Patel</h2>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/prachi1.jpg')} alt={"Prachi Prajapati"} height={150} width={150} />
                        </div>
                        <h2>Prachi Prajapati</h2>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/kanvi1.jpg')} alt={"Kanvi Patel"} height={150} width={150} />
                        </div>
                        <h2>Kanvi Patel</h2>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                    <div className="card w-48">
                        <div className="flex justify-center items-center">
                            <Image src={require('../../../../../public/images/aenal1.jpg')} alt={"Aenal Patani"} height={150} width={150} />
                        </div>
                        <h2>Aenal Patani</h2>
                        <p>Frontend Developer</p>
                        <div className="social-icons">
                            <a href="#" className="fab fa-instagram"><FaInstagramSquare /></a>
                            <a href="#" className="fab fa-linkedin"><FaLinkedin /></a>
                            <a href="#" className="fab fa-github"><VscGithubInverted /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Teams;