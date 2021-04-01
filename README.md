## Introduction

_io-app-assistance-form_ provides first level automatic assistance, through a conversational form it will be possible to send request for assistance

## Must have

- [Node](https://nodejs.org/en/)

## Main technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

## How to generate questions/answers

This tool uses a function utility named `utilityFormGenerator` that takes advantage of the library [conversational-form](https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/) to generate HTML tags based on JSON files contained in src/form.

To generate a simple question/answer you should add an object like this `{ "id": "id-example", "question": "Question example?", "answers": ["Si", "No"] }` to the JSON of the corresponding flow.

If you want to generate a conditional question/answer, therefore based on an answer previously given, you should add an object like this `{ "previousStepId": "id-example", "previousStepValue": "Si", "id": "id-example-2", "question": "Question example2?", "answers": ["Si", "No"] }` to the JSON of the corresponding flow.

If you want to stop the conversational form with an end message, based on an answer previously given, you should add an object like this `{ "previousStepId": "id-example-2", "previousStepValue": "No", "end": true, "message": "End message example" }` to the JSON of the corresponding flow.

## Useful scripts

- `npm start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- `npm run build` create a minified bundle
- `npm test` launches the test runner in the interactive watch mode
- `npm run eject` eject webpack configuration **- TO AVOID -**

## How to deploy the app

This step explains how to deploy your app on a server, this makes _io-app-assistance-form_ public, allowing other users to see your app using a URL.
First of all, launch `npm run build` in your terminal, this creates a build folder inside the root directory, which bundles your app and minifies it into HTML, CSS, and JavaScript files.
Now, you can use various platforms for deploying your build folder.
