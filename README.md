# Final Technical Exam
You will be cloning the application Yelp for the technical portion of our final. We will be testing you on Sequelize, Express, and React. You will need to define schema, make associations between models, setup routes, use `react-router` to handle front-end routing, create React components with lifecycle methods, and send AJAX requests to your server.

## Part II - Frontend
For the second frontend part of your final, you can use what you wrote in the first part or you can use the solution.
You can configure your components however you like, but I'll break down how I would structure it below.

## Seed Database
Running `npm test` will actually seed your database

### Router
You will need to use `react-router` to determine what components are displayed on the page. There should be two routes: one `IndexRoute` and another `Route`.

### Restaurants
  - fetches information on all restaurants
  - displays the names of all restaurants as a `react-router` `Link`
  - clicking on a restaurant will change the URL and bring you to the `Single Restaurant` page
  - renders a form that creates a new restaurant

### New Restaurant Form
  - form with 4 text fields and 1 drop-down option fields
  - fires off AJAX request to the server to create a new restaurant
  - on successful creation, the restaurant will be added to the list of restaurants

### Single Restaurant
  - fetches information on a single restaurant with all associated reviews
  - displays all restaurant information along with all the reviews for that restaurant
  - renders a form that allows you to write a new review for that restaurant

### New Review Form
  - form with 1 drop-down option field, 1 date/calendar field, 1 text field
  - sends form data off to the server to create a new review (don't forget to also the ID of the restaurant the review is for!)
  - on successful creation, the review will be added to the list of reviews for that restaurant
