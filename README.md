# Grand-Prix

This Web App displays a route from Lisbon to Algarve with the available [Charging Stations](https://tblx-daimler-trucks-and-buses.getsandbox.com/charging-stations) along the way ⚡
<br />
It is written in Vanilla JavaScript. (I did not see the necessity of using a library/ framework for this small POC)

Hosted on: https://grandprix-2021.web.app

## Features
- A fully intractive Map with the Departure to Arrival route
- Display relevant Charging Stations along the way
- Provides a way for the user to select only the Fast Charging Stations
- User is able to visualize the Charging Station information such as Address, socket type and number of sockets

## Development 

  ### Prerequisites
  - [HERE Maps](https://developer.here.com/login) credentials
  - [Node.js](https://nodejs.org/en/)

  ### Setup
  
  - Clone the repo
  - Get your own API KEY for authentication purposes from [HERE Maps](https://developer.here.com/projects)
  - Put your API KEY into the `credentials.js` file in the root directory 
  - Open the `index.html` file in your browser

  ### Structure
  ```
  |   README.md
  |   index.html
  |   ...
  |
  |___ scripts
  |   | map.js
  |   | index.js
  |   | route.js
  |   | ...
  |
  |___ styles
  |   | ...
  |
  |___  media
       | ...
  ```
  
## License

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) 
