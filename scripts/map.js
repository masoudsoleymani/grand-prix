"use strict";

// Boilerplate map initialization from HERE services

const mapContainer = document.getElementById('map');

// Step 1: initialize communication with the platform
const platform = new H.service.Platform({
  apikey: apikey
});
const defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map - this map is centered over Lisbon
const map = new H.Map(mapContainer,
  defaultLayers.vector.normal.map, {
  center: {lat: 38.768513, lng: -9.128277},
  zoom: 9,
  pixelRatio: window.devicePixelRatio || 1
});

// Step 3: make the map responsive and interactive
window.addEventListener('resize', () => map.getViewPort().resize());
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const ui = H.ui.UI.createDefault(map, defaultLayers);
