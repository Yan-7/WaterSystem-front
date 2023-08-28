import React from 'react';
import './PlantCard.css';
import { updatePlant } from '../services/api';
import cornImage from '../pics/corn.jpeg'

function PlantCard({ plant }) {
    const handleWaterNow = async () => {
        try {
            const updatedPlant = {
                ...plant,
                lastWateredTime: new Date().toISOString(),
            };
            await updatePlant(plant.plantId, updatedPlant);
            alert('Plant watered successfully!');
        } catch (error) {
            console.error('Error watering plant:', error);
            alert('Error watering plant. Please try again later.');
        }
    };

    const getStatusColor = () => {
        const lastWateredDate = new Date(plant.lastWateredTime);
        const currentDate = new Date();
        const differenceInDays = (currentDate - lastWateredDate) / (1000 * 60 * 60 * 24);

        if (differenceInDays > 7) {
            return 'red';
        } else if (differenceInDays > 3) {
            return 'orange';
        } else {
            return 'green';
        }
    };

    return (
        <div className="plant-card">
            <h2>Plant {plant.plantId}</h2>
            <img src={cornImage} alt='Corn Plant'/>
            <p>Last Watered: {new Date(plant.lastWateredTime).toLocaleDateString()} {new Date(plant.lastWateredTime).toLocaleTimeString()}</p>
            <p style={{ backgroundColor: getStatusColor() }}>Status: {plant.status}</p>
            <button id="sendWater" onClick={handleWaterNow}>Water Now</button>
        </div>
    );
}

export default PlantCard;
