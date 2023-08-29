import axios from 'axios';

// Read the API base URL from the environment variable
// If the environment variable is not set, it falls back to 'http://localhost:8080/api'
const apiBaseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

// Create an Axios instance with the base URL
const api = axios.create({
    baseURL: apiBaseURL,
});

// Function to fetch plants from the API
export const fetchPlants = async () => {
    try {
        const response = await api.get('/plants');
        return response.data;
    } catch (error) {
        console.error("Error fetching plants:", error);
        throw error;
    }
};

// Function to update a specific plant in the API
export const updatePlant = async (plantId, updatedPlant) => {
    try {
        const response = await api.put(`/plants/${plantId}`, updatedPlant);
        return response.data;
    } catch (error) {
        console.log("Problem updating plant", error);
        throw error;
    }
};

// Export the Axios instance for other uses if needed
export default api;
