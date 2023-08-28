import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const fetchPlants = async () => {
    try {
        const response = await api.get('/plants');
        return response.data;
    } catch (error) {
        console.error("Error fetching plants:", error);
        throw error;
    }
};

export const updatePlant = async(plantId, updatedPlant) => {
    try {
        const response = await api.put(`/plants/${plantId}`, updatedPlant);
        return response.data;
    } catch (error) {
        console.log("problem updatind plant", error);
        throw error;
        
    }
}

export default api;
