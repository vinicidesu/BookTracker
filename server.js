import { url } from "./config/db.js"
import express, { Router } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { routes } from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(routes);

mongoose.connect(url)
    const con = mongoose.connection;
    con.on('open', function(){
        console.log('Mongo listening on port 27017')
    });

app.listen(8080, () => {
    console.log('Express Server listening on port 8080');
});