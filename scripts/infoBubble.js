"use strict"; 

const addInfoBubble = (map, group) => {
  map.addObject(group);
  group.addEventListener('tap', function (evt) {
    let bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
      content: evt.target.getData()
    });
    ui.getBubbles().forEach(bub => ui.removeBubble(bub));
    ui.addBubble(bubble);
  }, false);

  //remove info bubbles 
  map.addEventListener("tap", function (evt) {
    if (evt.target === map) {
      ui.getBubbles().forEach(bub => ui.removeBubble(bub));
    }
  });
}

const InfoBubbleData = (address, socket_type, socket_number) => {
  return `
    <p><b>Address:</b> ${address}</p>
    <p><b>Socket Type:</b> ${socket_type}</p>
    <p><b>Socket Number:</b> ${socket_number}</p>
  `;
}
