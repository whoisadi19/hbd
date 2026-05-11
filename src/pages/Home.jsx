import React, { useState } from "react";
import png from '../assets/1.png'
import ballon1 from '../assets/balloon1.png'
import ballon2 from '../assets/balloon2.png'
import decorate from '../assets/decorate.png'
import decoFlowers from '../assets/decorate_flower.png'
import hat from '../assets/hat.png'
import smileIcon from '../assets/smiley_icon.png'
import { Link } from "react-router";
import BookCanvas from "../components/BookCanvas";
import SmallLetter from "../components/SmallLetter";
import orihime from "../assets/sona.jpeg";

const Home = () => {
    // ------------------- Hooks 
    const [Active, SetActive] = useState(true)




    return (
        <>
            <div id="wrapper">
                <div className="flag__birthday">
                    <img src={png} alt="" width="350" className="flag__left" />
                    <img src={png} alt="" width="350" className="flag__right" />
                </div>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="happy">
                                <span style={{ "--t": "4s" }}>H</span>
                                <span style={{ "--t": "4.2s" }}>a</span>
                                <span style={{ "--t": "4.4s" }}>p</span>
                                <span style={{ "--t": "4.6s" }}>p</span>
                                <span style={{ "--t": "4.8s" }}>y</span>
                            </h1>
                            <h1 className="birthday">
                                <span style={{ "--t": "5s" }}>B</span>
                                <span style={{ "--t": "5.2s" }}>i</span>
                                <span style={{ "--t": "5.4s" }}>r</span>
                                <span style={{ "--t": "5.6s" }}>t</span>
                                <span style={{ "--t": "5.8s" }}>h</span>
                                <span style={{ "--t": "6s" }}>d</span>
                                <span style={{ "--t": "6.2s" }}>a</span>
                                <span style={{ "--t": "6.4s" }}>y</span>
                            </h1>
                            <div className="hat">
                                <img src={hat} alt="" width="130" />
                            </div>
                        </div>



                        <div className="btn flex md:gap-2 md:flex-row flex-col">
                            <button onClick={() => SetActive(!Active)} id="btn__letter">
                                <div className="mail flex items-center justify-center gap-2 md:text-[1rem] text-sm">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <path fill="#d13852" d="M63.841 18.646c-.246-3.85-1.072-6.977-3.752-10.198c-5.369-6.439-17.71-7.511-23.23-1.312c-.963.912-1.872 2.01-2.785 3.322l-2.066 2.969l-2.067-2.969c-.916-1.312-1.827-2.411-2.79-3.322C21.627.937 9.287 2.008 3.921 8.448C1.237 11.669.412 14.796.166 18.646C-.184 30.092 8.122 39.257 9.147 40.6c5.637 6.613 11.786 12.866 18.03 18.627c1.13.989 2.106 1.812 3.082 2.628c.587.479 1.166.964 1.749 1.44c.582-.477 1.159-.961 1.743-1.44c.98-.816 1.956-1.639 3.082-2.628c6.247-5.761 12.397-12.01 18.04-18.627c1.025-1.343 9.332-10.508 8.979-21.954" />
                                        <path fill="#f1a5b1" d="M60.39 16.604a10.1 10.1 0 0 0-.457-2.909a9 9 0 0 0-1.169-2.42c-2.973-4.369-9.451-5.943-14.863-4.837c-2.111.508-4.225 1.302-5.197 3.318c-.331.865.365 1.281 1.44 1.228c3.894-.435 8.202-.043 11.645 1.63c.858.42 1.661.918 2.395 1.503c2.47 1.913 3.537 4.887 4.02 7.837c1.201-.242 1.854-1.683 2.01-2.965a10.5 10.5 0 0 0 .177-2.385" />
                                    </svg>
                                    Click Here Sona
                                </div>
                            </button>
                            <div id="FromAdi">
                                <Link to={'/love-letter'} className="flex items-center gap-2 md:text-[1rem] text-sm">
                                    <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
                                        <path fill="#fff" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0 1-2.914 2.914" />
                                        <path fill="#ea5a47" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.098l-.003-.002a5.86 5.86 0 0 0 1.305-3.69" />
                                        <g fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M65.086 55.5H6.878A2.877 2.877 0 0 1 4 52.623V17.248A2.25 2.25 0 0 1 6.248 15h59.446A2.306 2.306 0 0 1 68 17.306v35.28a2.914 2.914 0 0 1-2.914 2.914" />
                                            <path strokeLinecap="round" d="m5 16l15 16m47-16L52 32" />
                                            <path strokeLinejoin="round" d="M47.064 33.552A5.885 5.885 0 0 0 36 30.755a5.885 5.885 0 0 0-11.064 2.797c0 1.398.49 2.68 1.304 3.69l-.002.002L36 49.342l9.762-12.098l-.003-.002a5.86 5.86 0 0 0 1.305-3.69z" />
                                        </g>
                                    </svg>
                                    From Adi
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="box__account">
                            <div className="image">
                                <img src={orihime} alt="" />
                            </div>

                            <div className="balloon_one">
                                <img width="100px" src={ballon1} alt="" />
                            </div>
                            <div className="balloon_two">
                                <img width="100px" src={ballon2} alt="" />
                            </div>
                        </div>

                        <div className="cricle">
                            <div className="text__cricle">
                                {["h", "a", "p", "p", "y", " ", "b", "i", "r", "t", "h", "d", "a", "y", " "].map(
                                    (char, i) => (
                                        <span key={i} style={{ "--i": i + 1 }}>
                                            {char}
                                        </span>
                                    )
                                )}
                            </div>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>

                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div key={i} className={`decorate_star star${n}`} style={{ "--t": `${15 + i * 0.2}s` }}></div>
                ))}

                <div className="decorate_flower--one" style={{ "--t": "15s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--two" style={{ "--t": "15.3s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>
                <div className="decorate_flower--three" style={{ "--t": "15.6s" }}>
                    <img width="20" src={decoFlowers} alt="" />
                </div>

                <div className="decorate_bottom">
                    <img src={decorate} alt="" width="100" />
                </div>

                <div className="smiley__icon">
                    <img src={smileIcon} alt="" width="100" />
                </div>






                {/* =========================== BoxMail Canvas =============================== */}
                <BookCanvas active={Active} setActive={SetActive} />

                {/* ========================== Small letter from rajib ========================= */}
                <section className="smallLetter absolute md:-bottom-26 -bottom-40 md:left-[45%] left-[50%] -translate-x-1/2" style={{ "--t": "15.6s" }}>
                    <SmallLetter />
                </section>
            </div>
        </>
    );
};

export default Home;
