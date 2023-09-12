import React from "react";
import ProfilePic from "../Assets/amanda-image.png"
import { AiFillStar } from "react-icons/ai";


const Comentarios = () =>{
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <h1 className="primary-heading">
                    Comentários
                </h1>
                <p className="primary-text">
                    Veja o que as pessoas que usam nossa plataforma estão achando da experiência!
                </p>
            </div>
            <div className="testimonial-section-bottom" >
                <img src={ProfilePic} alt="imagem-de-perfil" />
                <p>Adorei a ideia do projeto e fiquei muito animada em poder ler várias histórias com o meu filho de maneira gratuita e fácil. Obrigada, Equipe Aurora!</p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Amanda Chagas</h2>
            </div>
        </div>

        
    )
};

export default Comentarios;