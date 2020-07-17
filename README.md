# Traveling-Business-Problem

> This project was originally cloned from this repository: https://github.com/HugoDF/express-postgres-starter. The repository provided a starter template for an express web application. 

## Project description
This project attempts to solve an optimization problem for small businesses: where to locate a business to maximize revenue. The author assumes a null hypothesis that businesses closer to their target demographic group will attract more customers and therefore more profit than businesses farther away. The project will use Volusia County, Florida for the experiment. Data is sourced from the Volusia County Property Appraiser and the US Census Bureau.

## Objectives

* Embed a leaflet map into a webpage. ✅ 

* Plot geojson on leaflet map from postgres database. ✅ 

* Gather demographic data for Volusia County, Florida using the US Census Bureau API. ✅ 

* Visualize demographic information on leaflet map using a heatmap. 

* Web scrap list of commercial properties available for leasing in Volusia County, Florida. Find parcel geometry for properties in the Volusia County Property Apprasiers' database, then plot them on the leaflet map.

* Construct weighted nodes for each census tract - nodes will be centered inside the tract geometry. The weight will be proportional to the size of a demographic group.

* Implement shortest path algorithm that calculates great-circle distance and city-block distance from each commercial property to each weighted node.

* Add UI controls to allow users to change algorithm selection, demographic group, and weight. 

* Test null hypothesis by comparing similar businesses with the same target demographic with shortest path approach. 

* Write up results and publish on Medium.

### Setup

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


