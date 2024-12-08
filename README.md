# Project Team Members
- Sai Chandu Amireddi
- Siva Kumar Vutla

# Web Project : Restaurants - Node/Express app
- Web application for managing restaurant data with user authentication and search functionalities.

# Project Features
- User Authentication: Secure registration and login using JWT tokens.
- Restaurant Management: CRUD operations for restaurant data.
- Search Functionality: Search restaurants by cuisine and borough.
- Responsive UI: User-friendly interface with EJS templates.

# Project Setup
- Clone the project from github into your local and open in VScode https://github.com/Chanduamireddi/WebProjectRestaurants
- Download and install dependencies using npm
- Setup env variable
- Start the server using node (Ex: node app.js)

# Validations
- Open the borwser and Navigate to http://localhost:3000/
- Add the endpoint to this localhost to view response
- You will be able to see the UI form search and cuisine search

# End Points
# Authentication:
- Register as new user: POST /api/auth/register
- User login: POST /api/auth/login
# Restaurants:
- Retrieve all restaurants: GET /api/restaurants: 
- Add a new restaurant: POST /api/restaurants
- Get a restaurant by ID: GET /api/restaurants/:id
- Update a restaurant by ID: PUT /api/restaurants/:id
- Delete a restaurant by ID: DELETE /api/restaurants/:id
