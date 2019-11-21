let express = require("express");
let app = express();
let bodyParser = require('body-parser');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true,useUnifiedTopology: true});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let todoRoute = require('./routes/route');

app.use('/',todoRoute);





app.listen(3001);
