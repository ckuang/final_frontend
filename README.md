# Final Technical Exam
You will be cloning the application Yelp for the technical portion of our final. We will be testing you on Sequelize, Express, and React. You will need to define schema, make associations between models, setup routes, use `react-router` to handle front-end routing, create React components with lifecycle methods, and send AJAX requests to your server.

## Part I - Backend
You will need to set up a database using the Sequelize library and use Express to handle routing.

### Step 1 - Setup
* Clone this repository.
* Run `npm install` in the terminal to get the necessary packages.
* Edit the config file to reflect your username, database, and `postgres`.

### Step 2 - Models
In the `/models` folder, create two files `restaurant.js` and `review.js`. Refer to this [sequelize example](https://github.com/sequelize/express-example) if you need to. You will need to define two schema for these models:
* Restaurant
  - name: string
  - neighborhood: string
  - address: string
  - cuisine: string
  - cost: integer
* Review
  - rating: integer
  - date: date
   - description: string

### Step 3 - Associations
You will need to associate the two models such that each review is associated with one restaurant.

### Step 4 - Routes
Your server use the Express library and will need to handle API requests and also display the actual application page. You'll need to create the following routes to accomplish this.
* GET - all restaurants
* GET - single restaurant w/ reviews
* POST - restaurant
* POST - review
* GET - default index.html page

### Step 5 - Test
Use Postman to manually check that your routes and models are written correctly. Use Postico to visualize the tables in your database.

### Step 6 - Mocha / Chai
Your exam will be graded according to how many tests it passes. There are tests inside of the `test` folder that you can run by typing `npm test`

## Part II - Frontend
For the second frontend part of your final, you can use what you wrote in the first part or you can use the solution. Your Yelp clone will have at least four components.

### Router
You will need to use `react-router` to determine what components are displayed on the page. There should be four paths that correspond with each of the components.

### Restaurants
  - fetches information on all restaurants
  - displays information on all restaurants
  - clicking on a restaurant will bring you to the `Single Restaurant` page

### New Restaurant
  - form with 3 text fields and 2 drop-down option fields
  - on successful creation, you'll be redirected to the `Single Restaurant` page

### Single Restaurant
  - fetches information on a single restaurant with all associated reviews
  - displays all restaurant information along with all the reviews for that restaurant

### New Review
  - form with 1 drop-down option field, 1 date/calendar field, 1 text field
  - sends form data off to the server to create a new review (don't forget to also the ID of the restaurant the review is for!)
  - on successful creation, you'll be redirected back to the `Single Restaurant` page
