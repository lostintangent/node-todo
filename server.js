const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose'); 			
const { localUrl } = require('./config/database');

mongoose.connect(process.env.MONGODB_URL || localUrl); 
mongoose.connection.on("error", () => {});

const app = express();

app.use(express.static("./public")); 	
app.use(bodyParser.json());

require('./app/routes')(app); 

const port = process.env.PORT || 8080; 			
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
