import React, { useState } from 'react';
import './PlantCard.css';
import { updatePlant } from '../../services/api';
import cornImage from '../../pics/corn.jpeg';
import flowers from '../../pics/flowers.bmp';
import soy from '../../pics/soy.bmp';
import wheat from '../../pics/wheat.bmp';

function PlantCard({ plant }) {
  const lastWatered = new Date(plant.lastWateredTime);
  const formattedDate = lastWatered.toLocaleDateString();
  const formattedTime = lastWatered.toLocaleTimeString();
  const contamination = plant.contamination; // Use the passed contamination value

  const [currentImage, setCurrentImage] = useState(cornImage);
  const imageArray = [cornImage,flowers,soy,wheat];

  const changeImage = () => {
    const nextIndex = (imageArray.indexOf(currentImage) + 1) % imageArray.length;
    setCurrentImage(imageArray[nextIndex]);
  };

  async function reduceContamination() {
    try {
      const updatedPlant = {
        ...plant,
        contamination: Math.max(0, plant.contamination - 200),  // Reduce contamination
      };
      await updatePlant(plant.plantId, updatedPlant);  // Corrected this line
      console.log('Plant updated successfully: ' + updatedPlant.contamination);
    } catch (error) {
      console.log(error);
    }
  }

  const handleWaterNow = async () => {
    if (plant.contamination > 800) {
      alert('water contamination !!!! cannot open water')
      return
    }
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

  const getContaminationStatus = () => {
    if (contamination > 800) {
      return 'red';
    } else if (contamination > 400 && contamination <= 800) {
      return 'orange';
    }
    return 'green';
  };

  return (
    <div className="plant-card">
      <h2>Plant {plant.plantId}</h2>
      <img src={currentImage} alt="Plant" />
      <button onClick={changeImage}>Change Image</button>
      <div className="plant-card-content">
        
        <p>Last Watered: {formattedDate} {formattedTime}</p>
        <p style={{ backgroundColor: getStatusColor() }}>Irrigation Status {plant.status}</p>
        <p style={{ backgroundColor: getContaminationStatus() }}>Contamination Status {contamination}</p>
        <button id="sendWater" onClick={handleWaterNow}>Water Now</button>
        <button onClick={reduceContamination}> reduce contamination</button>
      </div>
    </div>
  );
}

export default PlantCard;
