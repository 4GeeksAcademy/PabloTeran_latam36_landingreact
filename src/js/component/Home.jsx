import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

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
