import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Jumbotron = () => {
    return (
        <div className="jumbotron p-5 mb-4 bg-light rounded-3">
            <div className="container">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        </div>
    );
};

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

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white py-3">
            <p className="mb-0">Copyright © Your Website 2019</p>
        </footer>
    );
};

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <Jumbotron />
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <Card
                        imgSrc="https://via.placeholder.com/500x325"
                        title="Card title 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        buttonText="Find Out More!"
                    />
                    <Card
                        imgSrc="https://via.placeholder.com/500x325"
                        title="Card title 2"
                        text="Pellentesque in ipsum id orci porta dapibus."
                        buttonText="Find Out More!"
                    />
                    <Card
                        imgSrc="https://via.placeholder.com/500x325"
                        title="Card title 3"
                        text="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."
                        buttonText="Find Out More!"
                    />
                    <Card
                        imgSrc="https://via.placeholder.com/500x325"
                        title="Card title 4"
                        text="Vivamus suscipit tortor eget felis porttitor volutpat."
                        buttonText="Find Out More!"
                    />
                </div>
                <div className="my-5"></div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
