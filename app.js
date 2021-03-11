// index.js

/**
 * Required External Modules
 */
 const express = require("express");
 const path = require("path");
 var compression = require('compression');
 var helmet = require('helmet');

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
 app.use(compression()); //Compress all routes

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

 app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

  app.get("/user", (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
  });

  app.get("/logout", (req, res) => {
    res.render("logout", { title: "Logout" });
  });

/**
 * Server Activation
 */

 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });