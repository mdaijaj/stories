const express = require('express')
// const cors = require('cors');
const bodyParser=require('body-parser');
// const cookieParser= require('cookie-parser')

const app = express()

// app.use(cors());
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname)); 

let routes=require('./routes/index')
app.use('/', routes);

var port =5000;
app.listen(port, ()=>{
    console.log(`server is listening this ${port}`);
});