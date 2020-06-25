# Geojson Plotter

> This project was originally cloned from this repository: https://github.com/HugoDF/express-postgres-starter. The starter template provided by HugoDF was very helpful in starting this project. This project will be used to create a simple plotting application, and will be used as the template for future data analysis projects. 

## Objectives

> Embed a leaflet map into a webpage

### Setup

Pre-requisites:

- Docker for Desktop

Run `docker-compose up` in the root of the project.

It will bring up Postgres and the Express application server in development mode.

It binds the application server to `localhost:3000`, this can be re-mapped this by changing the first 3000 in `3000:3000` of [./docker-compose.yaml](./docker-compose.yaml)).

Postgres is exposed on port `35432`. The connection string is `postgres://user:pass@localhost:35432/db` (username, password and database name are defined in [./docker-compose.yaml](./docker-compose.yaml)).

You can connect to Postgres using the psql client:

```sh
psql postgres://user:pass@localhost:35432/db
```

The default Docker `CMD` is `npm start`, [./docker-compose.yaml](./docker-compose.yaml) overrides this to `npm run dev` which runs the application using nodemon (auto-restart on file change).


