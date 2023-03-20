# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Name: SadaPay

### Getting Started
To get started with the project, follow these steps:

    - Clone the repository to your local machine.
    - Run npm install to install dependencies.
    - Run npm start to start the development server.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`
Build fiel is already create and can be used using `npm run serve` command
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
This app is ready to be deployed!

### Table of Contents
    > Table of Contents
    > Technologies Used
    > Getting Started
    > Folder Structure
    > Button Loading Route
    > Styling with MUI/Material-UI
    > Generic Components

### Technologies Used
This project was built using the following technologies:

    - React
    - React Router
    - Material-UI
    - styled-components
    - @mui/x-data-grid

###  `Here is the file Structure for this project`
src/
|-- `src/assets`: Contains images and styles used in the project.
|   |-- `images`/
|   |-- `styles`/
|-- `components`/: Contains reusable components used throughout the project.
|   |-- `common`/: 
|   |-- `layout`/: Contains layout components that define the overall structure of each page.
|   |-- `UI`/: Contains UI components that are specific to each page.
|-- `contexts`/: Contains React contexts used in the project.
|-- `hooks`/: Contains hooks used in the project.
|-- `models`/: Contains models used in the project.
|-- `pages`/: Contains React components that define the pages of the project.
|-- `utils`/: Contains utility functions used in the project.

## Styling
### Material-UI
#### Styling with MUI/Material-UI
The project uses the MUI/Material-UI library for styling. This provides a set of pre-built React components that can be customized using CSS-in-JS. The project also includes a custom theme that overrides some of the default styles.

### Styled Components

Styled components are used for custom styles. This allows for more flexibility in styling and makes it easier to manage styles for specific components.
## Generic Components
To achieve reusability, generic components were created for common UI elements such as buttons, forms, and input fields. These components can be easily reused throughout the project by passing in props to customize their behavior and appearance.

### Grid
The Grid component is a custom component that uses Material-UI's Grid to display a grid of items. This component is used throughout the project to display various types of data.

## Fallback and Loading
### Fallback
In case there are any errors while rendering the UI components, a fallback UI has been set up using the React Error Boundary component. This will display a friendly error message instead of crashing the app.

### Loading
To provide a smooth user experience while data is being fetched, a loading spinner has been added to the UI. This spinner is displayed while data is being fetched from the server and disappears once the data has loaded.

## Page Not Found
a Page Not Found feature has been implemented to handle 404 errors. When a user navigates to a URL that does not exist, they will be redirected to a custom 404 page.

## Fake API
As the actual API was not provided for this project, I created a fake API using the mock-api website. This allowed me to create a basic structure for the `API` using the `YAML` file that was provided.

The `mock API` was used to create temporary endpoints for testing purposes. To ensure data `persistence` between `sessions`, the fake API data was saved to local storage using the localStorage API.

## Observability
## Sentry Integration
Sentry has been integrated into the project for observability. This allows for logging, debugging, and performance monitoring. Sentry has been added to the project in the following ways:


    - index.js: Sentry has been initialized in the index.js file to catch any unhandled exceptions.
    - App.js: A Sentry ErrorBoundary has been added to catch errors in React components.
    - package.json: The @sentry/react and @sentry/tracing packages have been added as dependencies.
### Benefits of Sentry
    * Provides real-time error tracking and alerts
    * Provides performance monitoring and analytics
    * Integrates with various platforms and services
    * Offers powerful debugging tools
    * Helps improve the quality and reliability of the project
