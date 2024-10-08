const express = require('express');
const bodyParser = require('body-parser');
const {connection} = require('./connection');
const routerAPI = require('./routes/api');
const cors = require('cors');


const app = express();

// Database connectivity 
connection('mongodb://localhost:27017/projectManagement').then(()=>{
    console.log("Database connection successfully ");
    
}).catch((error)=>{
    console.log('Database connection faild',error);
    
})

// / Frontend to backend Connection
corsOption = {
    origin:'http://localhost:3000',
    optionSuccessfulStatus: 200
}

app.use(cors(corsOption));
// Middleware 
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', routerAPI);

app.listen(8009 , ()=>{
    console.log("Srver is rinnung on the 8009");
    
})