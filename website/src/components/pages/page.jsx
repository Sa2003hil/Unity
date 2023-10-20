// import { useEffect, useState } from "react";
import videoFile from "../../assets/Apple.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import img from "../../assets/downarrow.png"
import './page.css';

export default function Section1() {


    return (
        <div className="container">
            <video autoPlay muted loop playsInline className="bg-clip">
                <source src={videoFile} type="video/mp4" />
            </video>
            <div className="content">
                <h3>REAL-TIME TOOLS AND MORE</h3>
                {/* <p className="animate-text">
                    <span>IMAGINE</span>
                    <span>CREATE</span>
                    <span>GROW</span>
                    <span>DO MORE</span>
                </p> */}

                <h2>IMAGINE</h2>
                <h1>WITH UNITY</h1>
                {/* <a href="#">Download</a> */}
                <button className="button">Download  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", }} className="arrow" /></button>
                <div className=" mt-6">
                    <img src={img} alt="" className="m-auto mt-4" />
                </div>
            </div>
        </div>
    );
}
