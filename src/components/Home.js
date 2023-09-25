import React from "react"
// import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
        {/* <Navbar /> */}
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section" >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="primary-heading" >Aurora, a plataforma infantil favorita para leitura.</h1>
                <p className="primary-text">Comece estimular a leitura com seu filho, de maneira divertida e inteligente.</p>
                <button className="secondary-button">Vamos lá?</button>
            </div>
        </div>
    </div>
    );
};

export default Home
