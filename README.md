![App Screenshot](https://github.com/JulianMendezw/kiwi_app/blob/master/frontend/public/Screenshot_dashboard.jpg?raw=true)

# Kiwi APP

This is a technical test for kiwi, with an api to manage deliveries and bots, through a dashboard developed in react and typescript.

## Diagram

![App Screenshot](https://github.com/JulianMendezw/kiwi_app/blob/master/frontend/public/diagram.jpg?raw=true)


## Backend

It is an API developed in node, express using a firestore service by firebase as database.

![ API Documentation](https://documenter.getpostman.com/view/15831605/UVsTpMtc)


## Frontend

Frontend was developed in node with react, sass and typescript which shows a list with deliveries and their different statuses, it also allows them to be sorted ascending and descending by date.


## Usage

You need to clone this repository in order to use the API and Frontend.

Remember to copy the serviceaccount file in order to use the firebase.


Start the API from backend folder project

```bash
npm run dev
```

Start the frontend from frontend folder

```bash
npm  start
