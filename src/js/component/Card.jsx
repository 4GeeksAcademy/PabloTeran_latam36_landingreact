import React from "react";

const Card = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
