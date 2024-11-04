# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This is demo project from Monnai that portrays an onboarding flow for lending usecase for a "non-traditional employment/gig worker" category using Sahamati.

When prompted for an input phone number

- 9876543210 represents an individual who is
  - working as a Driver in Ola/Uber
  - ready to consent to provide a access to a good amount of his data
- <any other number> represnts an indivisual who is
  - working as a delivery partner
  - not ready to provide consents to various data sources

For demo purposes, enter any data in input fields whereever necessary.

Currently a _Member Token_ needs to be generated for making calls to Sahamati and secrets are not shared in the application for security reasons, but the pages will be rendered for demo purpose.

If a valid member token can be generated, the token can be made available in src/LandingPages/sahamati/auth/GetAuthKey.js for the demo project to connect to Sahamati for interactions.

The current project connects to Sahamati and uses the Simulator data.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies the app requires.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
