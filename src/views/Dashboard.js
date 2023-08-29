import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard/PlantCard";
import FieldMap from "../components/FieldMap/FieldMap";
import FieldMapContamination from "../components/FieldMapContamination/FieldMapContamination";
import { fetchPlants } from "../services/api";
import "./Dashboard.css";

function Dashboard() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPlants() {
      try {
        const data = await fetchPlants();
        setPlants(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadPlants();
  }, []);

  if (loading) {
    return <div className="error">Loading plants. Please wait...</div>;
  }

  if (error) {
    return <div className="error">Error loading the plants</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Agro-Tech Dashboard</h1>
      </header>
      <div className="maps-container"> {/* New container for maps */}
        <FieldMap plants={plants} />
        <FieldMapContamination plants={plants} />
      </div>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
