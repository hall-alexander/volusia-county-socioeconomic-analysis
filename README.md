# Volusia County Socio-economic Analysis

> This project was originally cloned from this repository: https://github.com/HugoDF/express-postgres-starter. The repository provided a starter template for an express web application. 

## Project description
This project analyses the demographics and housing prices of Daytona Beach, New Smyrna Beach, and Ormond Beach in Volusia County, Florida. Data is sourced from the Volusia County Property Appraiser and the US Census Bureau.

## Objectives

* Embed a leaflet map into a webpage. ✅ 

* Plot geojson on leaflet map from postgres database. ✅ 

* Gather demographic data for Volusia County, Florida using the US Census Bureau API. ✅ 

* Visualize demographic information on leaflet map. ✅ 

* Switch from pug HTML templates to some frontend framework like React or Vue.

* Select data to include in the project directory for others to explore. 

## Setup

Pre-requisites:

- Docker for Desktop 🐳

First, you will need to build a docker image from the dockerfile in the root project folder.

```sh
docker build -t <image-name> .
```

After the image has been built, use docker run to start a container. Execute the following command to start the Express server in development mode.

```sh
docker run -it -p 3000:3000 --name <container-name> <image-name> npm run dev
```

Open up a new tab in your web browser, and go to localhost:3000/mapping.

## Visualizations

This was my first visualization of US Census data! It depicts the average annual household income in 2018 for each Census tract geometry, which is the smallest denomination of reporting groups. Red blocks represent average household income over 50,000 dollars a year. Blue blocks represent average household income under 50,000 dollars a year. 

<img src=images/averageAnnualHouseholdIncome.PNG>

