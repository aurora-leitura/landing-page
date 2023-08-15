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
            <h1 className="primary-heading" >Aurora, sua plataforma favorita para leitura.</h1>
            <p className="primary-text">Saiba mais sobre esta plataforma incrível que irá revolucionar as leituras de crianças do mundo todo.</p>
            <button className="secondary-button">Inscreva-se</button>
        </div>
    </div>
    );
};

export default Home
