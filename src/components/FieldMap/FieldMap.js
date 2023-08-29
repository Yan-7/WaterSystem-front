import React from 'react';
import './FieldMap.css';

function FieldMapWater({ plants }) {
    const getStatusColor = (lastWateredTime) => {
        const lastWateredDate = new Date(lastWateredTime);
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
        <div className="field-map">
             <h3>Watering</h3> 
            {plants.map(plant => (
                <div key={plant.plantId} className="plant-square" style={{ backgroundColor: getStatusColor(plant.lastWateredTime) }}>
                    {plant.plantId}
                </div>
            ))}
        </div>
    );
}
export default FieldMapWater;

