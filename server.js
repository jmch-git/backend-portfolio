///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const cors = require("cors"); // Protecting site from hackers

// initialize the express app - create application object
const app = express();

///////////////////////////////
// CONNECT TO DATA
////////////////////////////////
// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");
 
///////////////////////////////
// MOUNT MIDDLEWARE
////////////////////////////////
app.use(cors()); //// Protecting site from hackers - You must add a cors({origin: "https://sitepath"}) to protect it


///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req,res) => {
    res.send("Hello World");
});

// INDEX ROUTE - Projects
// route for retrieving projects
app.get("/about", (req,res) => {
    // send about info via JSON
    res.json(about);
});


///////////////////////////////
// LISTENER
////////////////////////////////
// declare a variable for our port number
const PORT = process.env.PORT || 4000;
// turn on the server listener
app.listen(PORT, () => console.log("Express is listening on PORT ${PORT}"));