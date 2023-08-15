import React from "react"
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
        <Navbar />
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section" >
            <h1 className="primary-heading" >
                Aurora, sua plataforma favorita para leitura.
            </h1>

        </div>
    </div>
    );
};

export default Home
