import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image:PickMeals,
            title:"Loren",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci.",
        },
        {
            image:ChooseMeals,
            title:"Loren",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci.",
        },
        {
            image:DeliveryMeals,
            title:"Loren",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci.",
        },
    ];
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">Sobre o projeto</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lorem eu leo pellentesque mollis at non orci.
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