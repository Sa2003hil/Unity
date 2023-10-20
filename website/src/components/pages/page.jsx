// import React from "react";
// import backgroundImage from "../../assets/remote.png";
import videoFile from "../../assets/Video.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './page.css'

export default function Section1() {
    return (
        <div className="h-screen w-screen overflow-hidden  relative">

            <div className="overlay " />
            <video src={videoFile} autoPlay muted loop className="video-bg" />

            <div className="absolute h-full w-full left-20 top-0">

                <div className="text-white absolute top-0 left-0 flex items-center justify-start h-full w-full textmain">
                    <div className="h-full gap-12 flex items-start justify-center flex-col pl-24 z-1">

                        <div className="rounded-full text-[#be7c04] py-3 font-semibold px-6 flex items-center justify-center gap-2">
                            3D game dev
                        </div>
                        <div className="text-5xl text-white font-semibold">
                            {/* <span className="text-white">Explore</span> <span>the</span>{" "}
                            <div>possibilities</div> */}
                            Work that we {" "}
                            <div className=" overflow-hidden">produce for our</div>
                            <div className=" overflow-hidden">clients</div>
                        </div>
                        {/* <div>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat quibusdam atque sunt velit, culpa dignissimos tempora voluptatum magni repellat, fuga omnis? Doloribus {" "}
                            </p>
                        </div> */}
                        <div className="flex items-center justify-center gap-6 text-sm">
                            <div className="">
                                <a href="#" className="button">Download <FontAwesomeIcon icon={faArrowRight} /> </a>
                            </div>

                        </div>
                    </div>
                    {/* <div className="w-full ">
                        <img src={backgroundImage} className=" " alt="" />
                    </div> */}
                </div>
            </div>
        </div >
    );
}
