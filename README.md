# Introduction

_io-app-assistance-form_ provides first level automatic assistance, through a conversational form it will be possible to send request for assistance

# Must have

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

# Main technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)

# How to generate questions/answers

To generate a simple question/answer you should add an object like this to the json of the corresponding flow `{ "id": "first-1", "question": "Non vedi una transazione?", "answers": ["Si"] }`

# Libraries used

- [conversational-form](https://space10-community.github.io/conversational-form/docs/1.0.0/getting-started/)

# Useful scripts

- `yarn start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- `yarn build` create a minified bundle
- `yarn test` launches the test runner in the interactive watch mode
- `yarn eject` eject webpack configuration **- TO AVOID -**
