const express = require("express");
const cors = require("cors");
const setupContactRoutes = require("./app/routes/contact.routes");
const { BadRequestError, errorHandler } = require("./app/errors");
const app = express();

app.use(cors());
 //parse requests of content-type - application/json
 app.use(express.json());

 // parse requests of content-type - application/x-www-form-urlencode

 //simple route 
app.get("/", (req, res) => { 
     res.json({message: "Wellcome to contact book application."});
 });


setupContactRoutes(app);
//handler 404 response 
app.use((req, res, next)=>{
    next(new BadRequestError(404, "Resource not found"));
});

app.use((error, req, res, next)=>{
    errorHandler.handleError(error, res);

});

module.exports = app;