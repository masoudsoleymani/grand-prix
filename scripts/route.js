"use strict";

// Boilerplate route initialization from HERE services

/**
 * @param {H.service.Platform} platform A stub class to access HERE services
 */
function routeFromAtoB(platform) {
  const router = platform.getRoutingService(null, 8),
    routeRequestParams = {
      routingMode: 'fast',
      transportMode: 'car',
      origin: '38.768513,-9.128277', 
      destination: '37.220077,-8.629170', 
      return: 'polyline'
    };

  router.calculateRoute(
    routeRequestParams,
    onSuccess,
    onError
  );
}
  
/**
 * This function will be called once the Routing REST API provides a response
 * @param {Object} result An object representing the calculated route
 */
function onSuccess(result) {
  const route = result.routes[0];
  addRouteShapeToMap(route);
}

/**
 * This function will be called if a communication error occurs during the request
 * @param {Object} error The error message received.
 */
function onError(error) {
  alert('Can\'t reach the remote server!');
}
  
/**
 * Creates a H.map.Polyline from the shape of the route and adds it to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addRouteShapeToMap(route) {
  route.sections.forEach((section) => {
    let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
    let polyline = new H.map.Polyline(linestring, {
      style: {
        lineWidth: 6,
        strokeColor: '#000099'
      }
    });

    map.addObject(polyline);
    map.getViewModel().setLookAtData({
      bounds: polyline.getBoundingBox()
    });
  });
  map.setZoom(9);
}

routeFromAtoB(platform);
