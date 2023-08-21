import React from 'react';

function PlantCard({ plant }) {
    return (
        <div className="plant-card">
            <h2>Plant {plant.id}</h2>
            <p>Last Watered: {plant.lastWateredTime}</p>
            <p>Status: {plant.status}</p>
            <button>Water Now</button>
        </div>
    );
}

export default PlantCard;
