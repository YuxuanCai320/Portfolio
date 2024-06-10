import React from 'react';
import './LoadingScreen.css';
function LoadingScreen() {
    return (
        <div className="loading-screen">
            <img src={`${process.env.PUBLIC_URL}/asset/image/Bridget.gif`} alt="Loading" className="loading-image"/>
            <p>Loading...</p>
        </div>
    );
}

export default LoadingScreen;
