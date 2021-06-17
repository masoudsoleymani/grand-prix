"use strict"; 

const fetchChargingStations = async (allChargingStations) => {
    allChargingStations = [];
    const data = await fetch(endpoint);
    const dataJSON = await data.json();

    // select all charging stations along the route
    [dataJSON].map((items) => {
        items.forEach(item => {
        if(
            item.latitude < 38.8 &&
            item.longitude > -9.1 &&
            item.longitude < -8.1
            )
            allChargingStations.push(item);
        })
    });

    return allChargingStations;
}
