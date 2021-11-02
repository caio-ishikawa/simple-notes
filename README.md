# Simple Notes (Work in Progress)

Simple notes is a web application that allows users to quickly take clean notes and save it in any of the desired folders.

# Technologies 
  - MERN (MongoDB, Express, React, and Node).
  - Redux
  - Docker

# To run current version locally:
  1. Download the project file.
  2. Navigate to downloaded directory.
  3. Create a file called secrets.js on ./backend with MongoDB cluster credentials. The file should contain the following: 
  ```js
const router = require('express').Router();

const secrets = "mongoDB database credentials";

module.exports = secrets;

```
  3. Run "docker-compose build" on the project source directory.
  4. Run "docker-compose up".
  5. Enter your browser and type "http://localhost:3000".


## KNOWN BUGS:

- Refresh on notes page causes JWT to expire.
- New notes don't show up on the list until user refreshes.
- Notes don't load in properly after login. (Check the default reducer state)