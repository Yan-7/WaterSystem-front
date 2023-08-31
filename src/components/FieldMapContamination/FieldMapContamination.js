import React from 'react';
import './FieldMapContamination.css'; // Reusing the same CSS as FieldMap.js

function FieldMapContamination({ plants }) {
  const getContaminationColor = (contamination) => {
    if (contamination > 800) {
      return 'red';
    } else if (contamination > 400 && contamination <= 800) {
      return 'orange';
    }
    return 'green';
  };

  return (
    <div className="field-map">
      <h3>Contamination</h3>
      {plants.map(plant => (
        <div key={plant.plantId} className="plant-square" style={{ backgroundColor: getContaminationColor(plant.contamination) }}>
          {plant.plantId}
        </div>
      ))}
    </div>
  );
}

export default FieldMapContamination;
