## Introduction

_io-app-assistance-form_ provides first level automatic assistance, through a conversational form it will be possible to send request for assistance

## Must have

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Main technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

## How to generate questions/answers

This tool uses a function utility named `utilityFormGenerator` that takes advantage of the library [conversational-form](https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/) to generate HTML tags based on JSON files contained in src/form.

To generate a simple question/answer you should add an object like this `{ "id": "id-example", "question": "Question example?", "answers": ["Si", "No"] }` to the JSON of the corresponding flow.

If you want to generate a conditional question/answer, therefore based on an answer previously given, you should add an object like this `{ "previousStepId": "id-example", "previousStepValue": "Si", "id": "id-example-2", "question": "Question example2?", "answers": ["Si", "No"] }` to the JSON of the corresponding flow.

If you want to stop the conversational form with an end message, based on an answer previously given, you should add an object like this `{ "previousStepId": "id-example-2", "previousStepValue": "No", "end": true, "message": "End message example" }` to the JSON of the corresponding flow.

## Useful scripts

- `yarn start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- `yarn build` create a minified bundle
- `yarn test` launches the test runner in the interactive watch mode
- `yarn eject` eject webpack configuration **- TO AVOID -**
