import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-Black border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background"
                height="630px" />
                <div className="card-img-overlay d-flex flex-column
                justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">99.9% Fake</h5>
                    <p className="card-text lead fs-1">
                        Check Out All The Trendy Stuff
                    </p>
                    </div>   
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;
