"use strict"; 

const config = (allChargingStations) => {
  const group = new H.map.Group();
  
}

fetchChargingStations()
  .then( allChargingStations => 
    config(allChargingStations)
  );
