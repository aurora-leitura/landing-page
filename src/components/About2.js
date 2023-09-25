import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image-mae-e-filha.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About2 = () => {
    return(
        <div className="about-section-container">
            <div className="about-background-image-container2">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-text-container">
                {/* <p className="primary-subheading">Sobre</p> */}
                <h1 className="primary-heading">
                    A Solução
                </h1>
                <p className="primary-text">
                    Nossa plataforma é um lugar onde a jornada da alfabetização se transforma em uma aventura emocionante. Utilizando tecnologia juntamente de métodos pedagógicos, criamos experiências de aprendizados envolventes e personalizadas.
                </p>
                <p className="primary-text">
                    Com histórias cativantes, ajudamos as crianças a desenvolver habilidades de leitura que durarão a vida inteira. E o melhor? Tudo isso de maneira totalmente gratuita!
                </p>
                {/* <div className="about-buttons-container">
                    <button className="secondary-button">Saiba Mais</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill /> Assista ao Vídeo </button>
                </div> */}
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
        </div>
    )
}

export default About2;