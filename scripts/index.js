"use strict"; 

const config = (allChargingStations) => {
  const group = new H.map.Group();
  const allChargingStationsButton = document.getElementById("all");
  const fastChargingStationsButton = document.getElementById("fast");
  let selectedColor = '';
  let allMarkers = [];

const addMarkers = (chargingStations) => {
    const svgMarker = 
      `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="8" cy="8" r="6" fill="#${selectedColor || "00ff00"}" stroke="black" stroke-width="2" />
      </svg>`;
    const dotIcon = new H.map.Icon(svgMarker, {anchor: {x:8, y:8}});

    chargingStations.forEach(station => {
      let marker = new H.map.Marker({lat: station.latitude, lng: station.longitude}, {icon: dotIcon});
      marker.setData( InfoBubbleData (station.address, station.socket_type, station.socket_number) );
      group.addObject(marker);
      allMarkers.push(marker);
    });
  }

  const removeMarkers = () => {
    allMarkers.forEach(marker => {
      group.removeObject(marker);
    });
    allMarkers = [];
  }

  allChargingStationsButton.addEventListener("click", () => {
    removeMarkers();
    selectedColor = "00ff00";
    addMarkers(allChargingStations);
  });
  
  fastChargingStationsButton.addEventListener("click", () => {
    removeMarkers();
    selectedColor = "e60000";
    addMarkers(allChargingStations.filter(item => item?.socket_type === "Rápido" ));
  });

  addMarkers(allChargingStations);
  addInfoBubble(map, group);
}

fetchChargingStations()
  .then( allChargingStations => 
    config(allChargingStations)
  ).then( () => {
    document.getElementById("loader").className += "hidden";
  });
