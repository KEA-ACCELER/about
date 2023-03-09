import React from "react";
import video from "../assets/space.mp4";
import { useMediaQuery } from "react-responsive";

export default function Home() {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 });
        return isDesktop ? children : null;
    };
    return (
        <Desktop>
            <div className="container">
                <div className="intro_wrapper">
                    <div className="catch_phrase">
                        <div className="catch_phrase_1">We provide</div>
                        <div>"Advanced Coding, Cloud Engineering,</div>
                        <div>and Lifelong Execution with Reliability"</div>
                    </div>
                    <video
                        className="main_vid"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        src={video}
                    />
                </div>
                <div className="desc_wrapper">
                    <div className="description">
                        <div>Our team Acceler, As a student team in Gachon</div>
                        <div>
                            Participating in KEA, is ready to do our best in the
                            training
                        </div>
                        <div>
                            and to do our best to develop our capabilities
                            through various projects.
                        </div>
                    </div>
                </div>
                <div className="logo_wrapper">
                    <img
                        className="logo_acceler"
                        src={require("../assets/acceler.png")}
                        alt=""
                    />
                    <img
                        className="logo_gachon"
                        src={require("../assets/gachon.png")}
                        alt=""
                    />
                    <img
                        className="logo_kakao"
                        src={require("../assets/Kakao_enterprise.png")}
                        alt=""
                    />
                </div>
            </div>
        </Desktop>
    );
}
