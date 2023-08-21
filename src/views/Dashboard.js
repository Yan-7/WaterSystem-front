import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';
import { fetchPlants } from '../services/api';
import './Dashboard.css';

function Dashboard() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        async function loadPlants() {
            try {
                const data = await fetchPlants();
                setPlants(data);
            } catch (error) {
                console.error("Error loading plants:", error);
            }
        }

        loadPlants();
    }, []);

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
