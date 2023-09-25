import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image-criancas.png";
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
                {/* <p className="primary-subheading">Sobre</p> */}
                <h1 className="primary-heading">
                    A Jornada de Alfabetização Pós-Pandemia
                </h1>
                <p className="primary-text">
                    Sabemos que o período pandêmico da COVID-19 foi um tempo difícil para todos, especialmente para nossas crianças e pré-adolescentes, que enfrentaram interrupções significativas em sua educação. Sabendo disso, o Aurora vem para suprir essa necessidade enfrentada.
                </p>
                <p className="primary-text">
                    A pandemia trouxe consigo um cenário desafiador para o aprendizado das crianças: aulas remotas, falta de interação social e a pressão de recuperar o tempo perdido são apenas alguns dos obstáculos que enfrentamos. Mas acreditamos que a leitura pode ser a chave para superar essas adversidades.
                </p>
                {/* <div className="about-buttons-container">
                    <button className="secondary-button">Saiba Mais</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill /> Assista ao Vídeo </button>
                </div> */}
            </div>
        </div>
    )
}

export default About;