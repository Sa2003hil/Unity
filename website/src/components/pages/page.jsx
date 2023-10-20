// import { useEffect, useState } from "react";
import videoFile from "../../assets/Apple.mp4";
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
                <h1>WITH UNITY</h1>
                <a href="#">Download</a>
            </div>
        </div>
    );
}
