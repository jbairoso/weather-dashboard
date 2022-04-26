# weather-dashboard

## Your Task
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the OpenWeather One Call API (Links to an external site.) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use localStorage to store any persistent data.

## User Story
AS A traveler <br/>
I WANT to see the weather outlook for multiple cities <br/>
SO THAT I can plan a trip accordingly <br/>

## Acceptance Criteria
GIVEN a weather dashboard with form inputs<br/>
WHEN I search for a city<br/>
THEN I am presented with current and future conditions for that city and that city is added to the search history<br/>
WHEN I view current weather conditions for that city<br/>
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index<br/>
WHEN I view the UV index<br/>
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe<br/>
WHEN I view future weather conditions for that city<br/>
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity<br/>
WHEN I click on a city in the search history<br/>
THEN I am again presented with current and future conditions for that city<br/>
