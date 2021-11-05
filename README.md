# Simple Notes (Work in Progress)

Simple-notes is a Markdwon editor with VIM keybinds aimed at making online note-taking easy to manage across different devices. Save it once and access it anywhere.

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

- Search bar turns black on refresh.

## TODO:

- Alerts for deletion.
- Register flow (currently create user without redirecting).
- Add filter fucntion for tags.
- Fix UI spacing on navbar icons.
- Work on mobile app variant without VIM keybinds (connected to the same backend).