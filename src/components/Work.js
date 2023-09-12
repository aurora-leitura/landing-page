import React from "react";
import Livro from "../Assets/livro.png";
import Criatividade from "../Assets/criativo.png";
import Amor from "../Assets/amor.png";

const Work = () => {
    const workInfoData = [
        {
            image:Livro,
            title:"Experiências",
            text:"A experiência de ler um bom livro é única, pois você conhece várias histórias e se diverte sem precisar sair do lugar!",
        },
        {
            image:Criatividade,
            title:"Criatividade",
            text:"Os livros são uma ótima forma de estimular na criança a criatividade, estimula ao pensar e a criar coisas novas!",
        },
        {
            image:Amor,
            title:"Afeto",
            text:"Quando um pai, mãe, avó, seja quem for, lê uma boa história para uma criança, cria-se um afeto e surgem momentos que serão inesquecíveis!",
        },
    ];
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Saiba Mais</p>
                <h1 className="primary-heading">Benefícios da Leitura</h1>
                <p className="primary-text">
                    Por que o projeto é importante?.
                </p>
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