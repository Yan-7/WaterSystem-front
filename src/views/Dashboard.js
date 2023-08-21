import React from 'react';
import PlantCard from '../components/PlantCard';

function Dashboard() {
    // Sample data for demonstration
    const plants = [
        { id: 1, lastWateredTime: '2023-08-20 10:00 AM', status: 'Healthy' },
        { id: 2, lastWateredTime: '2023-08-20 09:45 AM', status: 'Healthy' },
        // ... more plants
    ];

    return (
        <div>
            <h1>Agro-Tech Dashboard</h1>
            <div className="plant-grid">
                {plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
