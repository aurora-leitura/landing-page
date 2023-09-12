import React from "react";
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai";


const Comentarios = () =>{
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Comentários</p>
                <h1 className="primary-heading">
                    What They Are Saying
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci.
                </p>
            </div>
            <div className="testimonial-section-bottom" >
                <img src={ProfilePic} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci.</p>
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