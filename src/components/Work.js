import React from "react";
import Acessibilidade from "../Assets/acessibilidade.png";
import Personalização from "../Assets/personalizar.png";
import Motivacao from "../Assets/livro.png";


const Work = () => {
    const workInfoData = [
        {
            image:Acessibilidade,
            title:"Acessibilidade",
            text:"Nossa plataforma está disponível para todos, independentemente da localização ou recursos financeiros.",
        },
        {
            image:Personalização,
            title:"Personalização",
            text:"Adaptamos o aprendizado de acordo com as necessidades individuais de cada criança, garantindo um progresso consistente.",
        },
        {
            image:Motivacao,
            title:"Motivação",
            text:"Transformamos a leitura em uma paixão, incentivando as crianças a explorar mundos infinitos por meio das palavras.",
        },
    ];
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                {/* <p className="primary-subheading">Saiba Mais</p> */}
                <h1 className="primary-heading">Por que escolher Aurora?</h1>
                {/* <p className="primary-text">
                    Por que o projeto é importante?.
                </p> */}
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Work;