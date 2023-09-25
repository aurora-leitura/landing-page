import React from "react";
import Capa1 from "../Assets/capa1.jpg";
import Capa2 from "../Assets/capa2.jpg";
import Capa3 from "../Assets/capa3.jpg";
import Capa4 from "../Assets/capa4.jpg";
import Capa5 from "../Assets/capa5.jpg";
import Capa6 from "../Assets/capa6.jpg";


const Livros = () => {
    const workInfoData = [
        {
            image:Capa1,
            title:"Alice no País das Maravilhas",
            text:"de Lewis Carrol",
        },
        {
            image:Capa2,
            title:"Alice Através do Espelho",
            text:"de Lewis Carrol",
        },
        {
            image:Capa3,
            title:"Anne de Green Gables",
            text:"de Lucy Maud Montgomery",
        },
        {
            image:Capa4,
            title:"As Aventuras do Pinocchio",
            text:"de Carlo Collodi",
        },
        {
            image:Capa5,
            title:"O Magnífico Mágico de OZ",
            text:"de L. Frank Baum",
        },
        {
            image:Capa6,
            title:"Peter Pan & Wendy",
            text:"de J.M. Barrie",
        },
    ];
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                {/* <p className="primary-subheading">Saiba Mais</p> */}
                <h1 className="primary-heading">Coleção</h1>
                <p className="primary-text">
                    Veja alguns dos livros disponibilizados em nossa plataforma, de maneira totalmente gratuita!
                </p>
            </div>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data) => (
                        <div className="work-section-info-livros">
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                            <br></br>
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Livros;