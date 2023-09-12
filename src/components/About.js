import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return(
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">Sobre</p>
                <h1 className="primary-heading">
                    Saiba mais sobre este projeto incrível!
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci. Vestibulum mattis mi at felis congue ullamcorper a nec urna. Donec bibendum sodales laoreet.
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci. Vestibulum mattis mi at felis congue ullamcorper a nec urna. Donec bibendum sodales laoreet.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Saiba Mais</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill /> Watch Video </button>
                </div>
            </div>
        </div>
    )
}

export default About;