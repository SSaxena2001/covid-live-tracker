const express= require('express');
const cors= require('cors');
const axios =require('axios');
const morgan= require('morgan');


const app = express();
app.use(morgan());
app.use(cors());
app.use(express.static('public'));


app.get('/',(req, res)=>{
        res.sendFile(__dirname+'/index.html');
    }
);      

const port =process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});